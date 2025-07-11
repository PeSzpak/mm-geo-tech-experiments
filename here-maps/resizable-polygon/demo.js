function createResizablePolygon(map) {
  var svgCircle = '<svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="10" cy="10" r="7" fill="transparent" stroke="red" stroke-width="4"/>' +
      '</svg>',
      polygon = new H.map.Polygon(
        new H.geo.Polygon(new H.geo.LineString([51.2, 21.51, 0, 51.2, 25.6, 0, 49.2, 25.9, 0, 48.7, 22.5, 0, 49.9, 24, 0, 50.5, 24, 0])),
        {
          style: {fillColor: 'rgba(150, 100, 0, .8)', lineWidth: 0}
        }
      ),
      verticeGroup = new H.map.Group({
        visibility: false
      }),
      mainGroup = new H.map.Group({
        volatility: true, 
        objects: [polygon, verticeGroup]
      }),
      polygonTimeout;

  polygon.draggable = true;

  polygon.getGeometry().getExterior().eachLatLngAlt(function(lat, lng, alt, index) {
    var vertice = new H.map.Marker(
      {lat, lng},
      {
        icon: new H.map.Icon(svgCircle, {anchor: {x: 10, y: 10}})
      }
    );
    vertice.draggable = true;
    vertice.setData({'verticeIndex': index})
    verticeGroup.addObject(vertice);
  });

  map.addObject(mainGroup);

  mainGroup.addEventListener('pointerenter', function(evt) {
    if (polygonTimeout) {
      clearTimeout(polygonTimeout);
      polygonTimeout = null;
    }

    verticeGroup.setVisibility(true);
  }, true);

  mainGroup.addEventListener('pointerleave', function(evt) {
    var timeout = (evt.currentPointer.type == 'touch') ? 1000 : 0;

    polygonTimeout = setTimeout(function() {
      verticeGroup.setVisibility(false);
    }, timeout);
  }, true);

  verticeGroup.addEventListener('pointerenter', function(evt) {
    document.body.style.cursor = 'pointer';
  }, true);

  verticeGroup.addEventListener('pointerleave', function(evt) {
    document.body.style.cursor = 'default';
  }, true);

  verticeGroup.addEventListener('drag', function(evt) {
    var pointer = evt.currentPointer,
        geoLineString = polygon.getGeometry().getExterior(),
        geoPoint = map.screenToGeo(pointer.viewportX, pointer.viewportY);

    evt.target.setGeometry(geoPoint);

    geoLineString.removePoint(evt.target.getData()['verticeIndex']);
    geoLineString.insertPoint(evt.target.getData()['verticeIndex'], geoPoint);
    polygon.setGeometry(new H.geo.Polygon(geoLineString));

    evt.stopPropagation();
  }, true);
}

var platform = new H.service.Platform({
  apikey: window.apikey
});
var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map, {
  center: {lat: 50, lng: 24},
  zoom: 6,
  pixelRatio: window.devicePixelRatio || 1
});
window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');

createResizablePolygon(map);

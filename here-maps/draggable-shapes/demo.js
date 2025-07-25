function createDraggableShapes(map) {
  var brazilWKTgeometry = 'POLYGON ((-57.625133 -30.216295, -56.2909 -28.852761, -55.162286 -27.881915, -54.490725 -27.474757, -53.648735 -26.923473, -53.628349 -26.124865, -54.13005 -25.547639, -54.625291 -25.739255, -54.428946 -25.162185, -54.293476 -24.5708, -54.29296 -24.021014, -54.652834 -23.839578, -55.027902 -24.001274, -55.400747 -23.956935, -55.517639 -23.571998, -55.610683 -22.655619, -55.797958 -22.35693, -56.473317 -22.0863, -56.88151 -22.282154, -57.937156 -22.090176, -57.870674 -20.732688, -58.166392 -20.176701, -57.853802 -19.969995, -57.949997 -19.400004, -57.676009 -18.96184, -57.498371 -18.174188, -57.734558 -17.552468, -58.280804 -17.27171, -58.388058 -16.877109, -58.24122 -16.299573, -60.15839 -16.258284, -60.542966 -15.09391, -60.251149 -15.077219, -60.264326 -14.645979, -60.459198 -14.354007, -60.503304 -13.775955, -61.084121 -13.479384, -61.713204 -13.489202, -62.127081 -13.198781, -62.80306 -13.000653, -63.196499 -12.627033, -64.316353 -12.461978, -65.402281 -11.56627, -65.321899 -10.895872, -65.444837 -10.511451, -65.338435 -9.761988, -66.646908 -9.931331, -67.173801 -10.306812, -68.048192 -10.712059, -68.271254 -11.014521, -68.786158 -11.03638, -69.529678 -10.951734, -70.093752 -11.123972, -70.548686 -11.009147, -70.481894 -9.490118, -71.302412 -10.079436, -72.184891 -10.053598, -72.563033 -9.520194, -73.226713 -9.462213, -73.015383 -9.032833, -73.571059 -8.424447, -73.987235 -7.52383, -73.723401 -7.340999, -73.724487 -6.918595, -73.120027 -6.629931, -73.219711 -6.089189, -72.964507 -5.741251, -72.891928 -5.274561, -71.748406 -4.593983, -70.928843 -4.401591, -70.794769 -4.251265, -69.893635 -4.298187, -69.444102 -1.556287, -69.420486 -1.122619, -69.577065 -0.549992, -70.020656 -0.185156, -70.015566 0.541414, -69.452396 0.706159, -69.252434 0.602651, -69.218638 0.985677, -69.804597 1.089081, -69.816973 1.714805, -67.868565 1.692455, -67.53781 2.037163, -67.259998 1.719999, -67.065048 1.130112, -66.876326 1.253361, -66.325765 0.724452, -65.548267 0.789254, -65.354713 1.095282, -64.611012 1.328731, -64.199306 1.492855, -64.083085 1.916369, -63.368788 2.2009, -63.422867 2.411068, -64.269999 2.497006, -64.408828 3.126786, -64.368494 3.79721, -64.816064 4.056445, -64.628659 4.148481, -63.888343 4.02053, -63.093198 3.770571, -62.804533 4.006965, -62.08543 4.162124, -60.966893 4.536468, -60.601179 4.918098, -60.733574 5.200277, -60.213683 5.244486, -59.980959 5.014061, -60.111002 4.574967, -59.767406 4.423503, -59.53804 3.958803, -59.815413 3.606499, -59.974525 2.755233, -59.718546 2.24963, -59.646044 1.786894, -59.030862 1.317698, -58.540013 1.268088, -58.429477 1.463942, -58.11345 1.507195, -57.660971 1.682585, -57.335823 1.948538, -56.782704 1.863711, -56.539386 1.899523, -55.995698 1.817667, -55.9056 2.021996, -56.073342 2.220795, -55.973322 2.510364, -55.569755 2.421506, -55.097587 2.523748, -54.524754 2.311849, -54.088063 2.105557, -53.778521 2.376703, -53.554839 2.334897, -53.418465 2.053389, -52.939657 2.124858, -52.556425 2.504705, -52.249338 3.241094, -51.657797 4.156232, -51.317146 4.203491, -51.069771 3.650398, -50.508875 1.901564, -49.974076 1.736483, -49.947101 1.04619, -50.699251 0.222984, -50.388211 -0.078445, -48.620567 -0.235489, -48.584497 -1.237805, -47.824956 -0.581618, -46.566584 -0.941028, -44.905703 -1.55174, -44.417619 -2.13775, -44.581589 -2.691308, -43.418791 -2.38311, -41.472657 -2.912018, -39.978665 -2.873054, -38.500383 -3.700652, -37.223252 -4.820946, -36.452937 -5.109404, -35.597796 -5.149504, -35.235389 -5.464937, -34.89603 -6.738193, -34.729993 -7.343221, -35.128212 -8.996401, -35.636967 -9.649282, -37.046519 -11.040721, -37.683612 -12.171195, -38.423877 -13.038119, -38.673887 -13.057652, -38.953276 -13.79337, -38.882298 -15.667054, -39.161092 -17.208407, -39.267339 -17.867746, -39.583521 -18.262296, -39.760823 -19.599113, -40.774741 -20.904512, -40.944756 -21.937317, -41.754164 -22.370676, -41.988284 -22.97007, -43.074704 -22.967693, -44.647812 -23.351959, -45.352136 -23.796842, -46.472093 -24.088969, -47.648972 -24.885199, -48.495458 -25.877025, -48.641005 -26.623698, -48.474736 -27.175912, -48.66152 -28.186135, -48.888457 -28.674115, -49.587329 -29.224469, -50.696874 -30.984465, -51.576226 -31.777698, -52.256081 -32.24537, -52.7121 -33.196578, -53.373662 -33.768378, -53.650544 -33.202004, -53.209589 -32.727666, -53.787952 -32.047243, -54.572452 -31.494511, -55.60151 -30.853879, -55.973245 -30.883076, -56.976026 -30.109686, -57.625133 -30.216295))',
    circle = new H.map.Circle(
      { lat: -14, lng: -80 },
      600000,
      {
        style: { fillColor: 'yellow', lineWidth: 0 }
      }
    ),
    polygon = new H.map.Polygon(
      H.util.wkt.toGeometry(brazilWKTgeometry),
      {
        style: { fillColor: 'rgba(255, 0, 0, .5)', lineWidth: 0 }
      }
    ),
    rect = new H.map.Rect(
      new H.geo.Rect(15, -87, 0, -68),
      {
        style: { fillColor: 'gray', lineWidth: 0 }
      }
    ),
    polyline = new H.map.Polyline(
      new H.geo.LineString([-22, -80, 0, -32, -75, 0, -32, -70, 0, -42, -65, 0]),
      {
        style: { strokeColor: 'blue', lineWidth: 8 }
      }
    ),
    draggableGroup = new H.map.Group({
      volatility: true
    });

  draggableGroup.addObjects([circle, polygon, rect, polyline]);

  polygon.draggable = true;
  circle.draggable = true;
  rect.draggable = true;
  polyline.draggable = true;

  map.addObject(draggableGroup);

  draggableGroup.addEventListener('pointerenter', function () {
    document.body.style.cursor = 'pointer';
  }, true);

  draggableGroup.addEventListener('pointerleave', function () {
    document.body.style.cursor = 'default';
  }, true);


  circle.addEventListener('dragstart', function (evt) {
    var pointer = evt.currentPointer,
      object = evt.target,
      screenPositon = map.geoToScreen(object.getCenter()),
      offset = new H.math.Point(pointer.viewportX - screenPositon.x, pointer.viewportY - screenPositon.y);

    object.setData({
      offset: offset
    });
    evt.stopPropagation();
  });

  circle.addEventListener('drag', function (evt) {
    var pointer = evt.currentPointer,
      object = evt.target,
      offset = object.getData()['offset'];

    object.setCenter(map.screenToGeo(pointer.viewportX - offset.x, pointer.viewportY - offset.y));
    evt.stopPropagation();
  });

  polygon.addEventListener('dragstart', function (evt) {
    var pointer = evt.currentPointer,
      object = evt.target;

    object.setData({
      startCoord: map.screenToGeo(pointer.viewportX, pointer.viewportY)
    });
    evt.stopPropagation();
  });

  polygon.addEventListener('drag', function (evt) {
    var pointer = evt.currentPointer,
      object = evt.target,
      startCoord = object.getData()['startCoord'],
      newCoord = map.screenToGeo(pointer.viewportX, pointer.viewportY),
      outOfMapView = false;

    if (!newCoord.equals(startCoord)) {
      var currentLineString = object.getGeometry().getExterior(),
        newLineString = new H.geo.LineString();

      currentLineString.eachLatLngAlt(function (lat, lng, alt) {
        var diffLat = (lat - startCoord.lat),
          diffLng = (lng - startCoord.lng),
          newLat = newCoord.lat + diffLat,
          newLng = newCoord.lng + diffLng;

        if (newLat >= 90 || newLat <= -90) {
          outOfMapView = true;
          return;
        }

        newLineString.pushLatLngAlt(newLat, newLng, 0);
      });

      if (!outOfMapView) {
        object.setGeometry(new H.geo.Polygon(newLineString));
        object.setData({
          startCoord: newCoord
        });
      }
    }
    evt.stopPropagation();
  });

  rect.addEventListener('dragstart', function (evt) {
    var pointer = evt.currentPointer,
      object = evt.target;

    object.setData({
      startCoord: map.screenToGeo(pointer.viewportX, pointer.viewportY)
    });
    evt.stopPropagation();
  });

  rect.addEventListener('drag', function (evt) {
    var pointer = evt.currentPointer,
      object = evt.target,
      startCoord = object.getData()['startCoord'],
      newCoord = map.screenToGeo(pointer.viewportX, pointer.viewportY);

    if (!newCoord.equals(startCoord)) {
      var currentGeoRect = object.getGeometry().getBoundingBox();
      newTop = currentGeoRect.getTop() + newCoord.lat - startCoord.lat,
        newLeft = currentGeoRect.getLeft() + newCoord.lng - startCoord.lng,
        newBottom = currentGeoRect.getBottom() + newCoord.lat - startCoord.lat,
        newRight = currentGeoRect.getRight() + newCoord.lng - startCoord.lng,
        newGeoRect = new H.geo.Rect(newTop, newLeft, newBottom, newRight);

      if (newTop >= 90 || newBottom <= -90) {
        return;
      }

      object.setBoundingBox(newGeoRect);
      object.setData({
        startCoord: newCoord
      });
    }
    evt.stopPropagation();
  });

  polyline.addEventListener('dragstart', function (evt) {
    var pointer = evt.currentPointer,
      object = evt.target;

    object.setData({
      startCoord: map.screenToGeo(pointer.viewportX, pointer.viewportY)
    });
    evt.stopPropagation();
  });

  polyline.addEventListener('drag', function (evt) {
    var pointer = evt.currentPointer,
      object = evt.target,
      startCoord = object.getData()['startCoord'],
      newCoord = map.screenToGeo(pointer.viewportX, pointer.viewportY),
      outOfMapView = false;

    if (!newCoord.equals(startCoord)) {
      var currentLineString = object.getGeometry(),
        newLineString = new H.geo.LineString();

      currentLineString.eachLatLngAlt(function (lat, lng, alt) {
        var diffLat = (lat - startCoord.lat),
          diffLng = (lng - startCoord.lng),
          newLat = newCoord.lat + diffLat,
          newLng = newCoord.lng + diffLng;

        if (newLat >= 90 || newLat <= -90) {
          outOfMapView = true;
          return;
        }

        newLineString.pushLatLngAlt(newLat, newLng, 0);
      });

      if (!outOfMapView) {
        object.setGeometry(newLineString);
        object.setData({
          startCoord: newCoord
        });
      }
    }
    evt.stopPropagation();
  });
}

var platform = new H.service.Platform({
  apikey: window.apikey
});
var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map, {
  center: { lat: -14, lng: -60 },
  zoom: 3,
  pixelRatio: window.devicePixelRatio || 1
});
window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');

createDraggableShapes(map);

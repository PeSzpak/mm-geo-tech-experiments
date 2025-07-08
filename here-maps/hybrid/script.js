const platform = new H.service.Platform({
  apikey: 'MKHYnbh-5BC0y3Su_Z4JnmIX2tKifTyfMfdLJjEMn44'
});

const layers = platform.createDefaultLayers();

// Inicializa o mapa com satélite puro
const map = new H.Map(
  document.getElementById('mapContainer'),
  layers.raster.satellite.map,
  {
    center: { lat: -23.533773, lng: -46.625290 },
    zoom: 14,
    pixelRatio: window.devicePixelRatio || 1
  }
);

// Adiciona controle de mouse/touch e interface
const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
const ui = H.ui.UI.createDefault(map, layers);

// Adiciona overlay de labels para virar "hybrid"
map.addLayer(layers.raster.satellite.labels);

// Adiciona marcador com popup
const marker = new H.map.Marker({ lat: -23.533773, lng: -46.625290 });
map.addObject(marker);
marker.addEventListener('tap', () => {
  alert("São Paulo - Centro");
});

const layers = platform.createDefaultLayers();

// Satélite base
const base = layers.raster.satellite.map;

// Overlay de labels
const mapLabels = layers.raster.satellite.labels;

const map = new H.Map(
  document.getElementById('mapContainer'),
  base, // Primeiro layer
  {
    center: { lat: -23.533773, lng: -46.625290 },
    zoom: 14,
    pixelRatio: window.devicePixelRatio || 1
  }
);

// Adiciona labels por cima
map.getBaseLayer().setMax(20);
map.addLayer(mapLabels);

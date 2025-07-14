mapboxgl.accessToken = 'API_KEY';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11',
  center: [-46.625290, -23.533773],
  zoom: 15
});

new mapboxgl.Marker().setLngLat([-46.625290, -23.533773]).addTo(map);

mapboxgl.accessToken = 'API_KEY'; // SUA API KEY

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-46.625290, -23.533773],
  zoom: 13
});

new mapboxgl.Marker().setLngLat([-46.625290, -23.533773]).addTo(map);

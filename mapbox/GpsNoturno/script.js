mapboxgl.accessToken = 'API_KEY';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/navigation-night-v1',
  center: [-46.625290, -23.533773],
  zoom: 13
});

new mapboxgl.Marker().setLngLat([-46.625290, -23.533773]).addTo(map);

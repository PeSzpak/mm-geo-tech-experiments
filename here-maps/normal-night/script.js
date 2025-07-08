const platform = new H.service.Platform({
    apikey: 'MKHYnbh-5BC0y3Su_Z4JnmIX2tKifTyfMfdLJjEMn44'
  });
  
  const defaultLayers = platform.createDefaultLayers();
  
  const map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.night,
    {
      center: { lat: -23.533773, lng: -46.625290 },
      zoom: 14,
      pixelRatio: window.devicePixelRatio || 1
    }
  );
  
  // Interação e zoom com mouse/touch
  const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
  // UI de zoom e outras ferramentas
  const ui = H.ui.UI.createDefault(map, defaultLayers);
  
  // Marcador com popup
  const marker = new H.map.Marker({ lat: -23.533773, lng: -46.625290 });
  map.addObject(marker);
  
  marker.addEventListener('tap', function () {
    alert("São Paulo - Centro");
  });
  
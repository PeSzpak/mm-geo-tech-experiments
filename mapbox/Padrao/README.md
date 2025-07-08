# Teste 1 - Mapa Básico com Mapbox GL JS

Este projeto é um exemplo mínimo para carregar um mapa básico usando Mapbox GL JS (versão 2.14.1 ou 2.15.0) via CDN.

---

## Passo a passo para rodar

1. **Obtenha seu token público da Mapbox:**

   - Vá para https://account.mapbox.com/access-tokens/
   - Copie o token que começa com `pk.` (public)

2. **Crie o arquivo `index.html` com o código abaixo:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Mapa Básico Mapbox GL JS</title>
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
  <link href="https://cdn.jsdelivr.net/npm/mapbox-gl@2.14.1/dist/mapbox-gl.css" rel="stylesheet" />
  <style>
    body { margin:0; padding:0; }
    #map { position:absolute; top:0; bottom:0; width:100%; }
  </style>
</head>
<body>
  <div id="map"></div>
  <script src="https://cdn.jsdelivr.net/npm/mapbox-gl@2.14.1/dist/mapbox-gl.js"></script>
  <script>
    mapboxgl.accessToken = 'pk.seu_token_publico_aqui';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-46.625290, -23.533773],
      zoom: 12
    });
  </script>
</body>
</html>

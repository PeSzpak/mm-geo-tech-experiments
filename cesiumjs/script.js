Cesium.Ion.defaultAccessToken = 'SUA_APIKEY_AQUI'; 


const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain(),
  shouldAnimate: true
});


viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(-46.625290, -23.533773, 5000)
});


const pinBuilder = new Cesium.PinBuilder();
const bluePin = viewer.entities.add({
  name: "São Paulo - Centro",
  position: Cesium.Cartesian3.fromDegrees(-46.625290, -23.533773),
  billboard: {
    image: pinBuilder.fromText("SP", Cesium.Color.ROYALBLUE, 48).toDataURL(),
    verticalOrigin: Cesium.VerticalOrigin.BOTTOM
  },
  description: "<h3>São Paulo</h3><p>Centro da cidade</p>"
});

require([
  "esri/Map",
  "esri/layers/MapImageLayer",
  "esri/views/MapView",
  "dojo/domReady!"
], function(Map, MapImageLayer, MapView) {
  var map = new Map({
    basemap: "hybrid"
  });
  
  var Snotel_Network = new MapImageLayer({
  	url: "http://geoserver2.byu.edu/arcgis/rest/services/The_Snowmen/Snotel_Network/MapServer"
  });
  var Utah_Counties = new MapImageLayer({
  	url: "http://geoserver2.byu.edu/arcgis/rest/services/The_Snowmen/Utah_Counties/MapServer"
  });
  var Utah_DEM = new MapImageLayer({
  	url: "http://geoserver2.byu.edu/arcgis/rest/services/The_Snowmen/Utah_DEM/MapServer"
  });
  var Utah_State = new MapImageLayer({
  	url: "http://geoserver2.byu.edu/arcgis/rest/services/The_Snowmen/Utah_State/MapServer"
  });
    
map.layers.add(Snotel_Network);
map.layers.add(Utah_Counties);
map.layers.add(Utah_DEM);
map.layers.add(Utah_State);
  var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-87, 13],
      zoom: 5
  });
});

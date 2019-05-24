require([
  "esri/Map",
  "esri/views/MapView",
], function(Map, MapView) {
  var map = new Map({
    basemap: "osm"
  });

  var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-87, 13],
      zoom: 5
  });	
  
	let lat_list = [ 
		14.408741,
		-0.741182, 
		-40.929923

	];
	
	let lon_list = [ 
		-91.247796,
		-90.306385,
		172.970942
				
	];
	
	let name_list = [
		"Siguacan River near Guatemala City", 
		"Galapagos Islands, Ecuador", 
		"Abel Tasman National Park, New Zealand"

	];
	
	let content_list = [
		"Download the Forecast: https://tethys.byu.edu/apps/streamflow-prediction-tool/api/GetForecast/?watershed_name=central_america&subbasin_name=merit&reach_id=927466&forecast_folder=most_recent&return_format=csv" +
		"Download the Historical Data: https://tethys.byu.edu/apps/streamflow-prediction-tool/api/GetHistoricalData/?watershed_name=central_america&subbasin_name=merit&reach_id=927466&return_format=csv",
		"hi",
		"what's up"

	]
							
	for(let i = 0; i < lon_list.length; i++){
		
		view.graphics.add({
			symbol: {
				type: "text",
				color: "#2f5799",
				text: "\ue613",
				font: {
					size: 20,
					family: "CalciteWebCoreIcons"
				}
			},
			geometry: {
				type: "point",
				longitude: lon_list[i],
				latitude: lat_list[i]
			},
			popupTemplate: {
				title: name_list[i],
				content: content_list[i]	
			}	
		});
	};
	
	
  
    function zoom_to_region() {
      var region = document.getElementById("choose_region").options;
      if (region = "costarica") {
          var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-87, 13],
          zoom: 8
        });

        alert("Region = " + region);
      }
    };
});

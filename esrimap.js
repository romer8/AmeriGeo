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
		14.414071,
		14.803385, 
		9.122188,
		10.931301
	];
	
	let lon_list = [ 
		-91.182087,
		-84.788530,
		-79.068260,
		-84.330854
	];
	
	let name_list = [
		"Rio Madre Vieja", 
		"Rio Coco", 
		"Rio Chepo",
		"Rio San Juan"

	];
	
	let content_list = [
		"Download the " + "<a href=https://tethys.byu.edu/apps/streamflow-prediction-tool/api/GetForecast/?watershed_name=central_america&subbasin_name=merit&reach_id=927466&forecast_folder=most_recent&return_format=csv>Forecast</a>" +
		"<br>Download the " + "<a href=https://tethys.byu.edu/apps/streamflow-prediction-tool/api/GetHistoricData/?watershed_name=central_america&subbasin_name=merit&reach_id=926768&return_format=csv>Historic Data</a>",
		
		"Download the " + "<a href=https://tethys.byu.edu/apps/streamflow-prediction-tool/api/GetForecast/?watershed_name=central_america&subbasin_name=merit&reach_id=927466&forecast_folder=most_recent&return_format=csv>Forecast</a>" +
		"<br>Download the " + "<a href=https://tethys.byu.edu/apps/streamflow-prediction-tool/api/GetHistoricData/?watershed_name=central_america&subbasin_name=merit&reach_id=926768&return_format=csv>Historic Data</a>",
		
		"Download the " + "<a href=https://tethys.byu.edu/apps/streamflow-prediction-tool/api/GetForecast/?watershed_name=central_america&subbasin_name=merit&reach_id=929355&forecast_folder=most_recent&return_format=csv>Forecast</a>" +
		"<br>Download the " + "<a href=https://tethys.byu.edu/apps/streamflow-prediction-tool/api/GetHistoricData/?watershed_name=central_america&subbasin_name=merit&reach_id=929355&return_format=csv>Historic Data</a>",
		
		"Download the " + "<a href=https://tethys.byu.edu/apps/streamflow-prediction-tool/api/GetForecast/?watershed_name=central_america&subbasin_name=merit&reach_id=928849&forecast_folder=most_recent&return_format=csv>Forecast</a>" +
		"<br>Download the " + "<a href=https://tethys.byu.edu/apps/streamflow-prediction-tool/api/GetHistoricData/?watershed_name=central_america&subbasin_name=merit&reach_id=928849&return_format=csv>Historic Data</a>",


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
	
    function ZoomToRegion() {
      let region = document.getElementById("mySelect").value;
      if (region = "guatemala") {
	  console.log(region)
	      
          var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-87, 13],
          zoom: 8
        });
      } elseif (region = "belize") {
      
      } elseif (region = "elsalvador") {
	      
      } elseif (region = "honduras") {
	      
      } elseif (region = "nicaragua") {
	      
      } elseif (region = "costarica") {
	      
      } elseif (region = "panama") {
	      
      }
    };	

});





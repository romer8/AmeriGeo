require([
  "esri/Map",
  "esri/views/MapView",
  "dijit/form/Button",
  "dojo/dom",
  "dojo/domReady!",
], function(Map, MapView, Button, dom) {
  var map = new Map({
    basemap: "osm"
  });

  var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-87, 13],
      zoom: 5
  });

    // Create a button programmatically:
    var myButton = new Button({
      label: "Selecciona",
	  onClick: function(){
      var region = document.getElementById("mySelect").value;
      if (region == "guatemala") {
	  var view = new MapView({
      		container: "viewDiv",
      		map: map,
      		center: [-91.182087, 14.414071],
      		zoom: 7
  	  });
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

      } else if (region == "belize") {
	  var view = new MapView({
      		container: "viewDiv",
      		map: map,
      		center: [-88.686007, 17.216854],
      		zoom: 8
  	  });
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

      } else if (region == "elsalvador") {
	  var view = new MapView({
      		container: "viewDiv",
      		map: map,
      		center: [-89.18718, 13.68935],
      		zoom: 9
  	  });
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

      } else if (region == "honduras") {
	  var view = new MapView({
      		container: "viewDiv",
      		map: map,
      		center: [-86.820350, 13.943780],
      		zoom: 7
  	  });
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

      } else if (region == "nicaragua") {
	  var view = new MapView({
      		container: "viewDiv",
      		map: map,
      		center: [-86.396540, 13.362330],
      		zoom: 7
  	  });
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

      } else if (region == "costarica") {
	  var view = new MapView({
      		container: "viewDiv",
      		map: map,
      		center: [-84.090725, 9.928069],
      		zoom: 8
  	  });
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

      } else if (region == "panama") {
	  var view = new MapView({
      		container: "viewDiv",
      		map: map,
      		center: [-79.519870, 8.982379],
      		zoom: 7
  	  });
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

      }
    }
    }, "progButtonNode").startup();



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

});

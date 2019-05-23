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
		18.588025,
		-0.741182, 
		-40.929923, 
		-25.690871, 
		58.554978, 
		45.976577, 
		60.963107,
		48.770959,
		-17.925976,
		38.891225	
	];
	
	let lon_list = [ 
		98.487056,
		-90.306385,
		172.970942,
		-54.440813,
		-155.791548,
		7.658461,
		6.967813,
		-121.298461,
		25.857526,
		-77.026066				
	];
	
	let name_list = [
		"Doi Inthanon National Park , Thailand", 
		"Galapagos Islands, Ecuador", 
		"Abel Tasman National Park, New Zealand", 
		"Iguazu Falls, Argentina", 
		"Katmai National Park, AK", 
		"Matterhorn, Switzerland", 
		"Nærøyfjord Aurland, Norway", 
		"North Cascades National Park, WA", 
		"Victoria Falls, Zimbabwe", 
		"Washington DC"
	];
	
	let content_list = [
		"Hello",
		"hi",
		"what's up",
		"Hola",
		"Sup",
		"Hi2",
		"Que xopa",
		"q tal",
		"stuff",
		"yikes"
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

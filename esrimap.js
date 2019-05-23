require([
  "esri/Map",
  "esri/layers/MapImageLayer",
  "esri/views/MapView",
  "dojo/domReady!"
], function(Map, MapView) {
  var map = new Map({
    basemap: "hybrid"
    
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
		"My Dad served his mission in Thailand, so I've always wanted to go." +
			"<img alt='Thailand img' width=100% src='http://static.asiawebdirect.com/m/bangkok/portals/chiangmai-bangkok-com/shared/teasersL/top10-attractions/teaserMultiLarge/imageHilight/top-ten_cm.jpg'>",
		"I've always been fascinated by the Galapagos Islands. It is a very unique place and the history is pretty cool." +
			"<img alt='Galapagos img' width=100% src='https://www.abercrombiekent.com/-/media/ak/media-for-prod/destinations/mastheads/south-america-galapagos-marine-iguana-mh.jpg?h=500&w=1224&la=en&hash=F53C7B40EF7100832F7F6DD13C3A0E623F140327'>",
		"New Zealand has always been a place that I want to visit. This national park looks amazing." +
			"<img alt='Abel Tasman NP img' width=100% src='https://d3ngrkosxxbdp2.cloudfront.net/wp-content/uploads/2018/03/hero-abel-tasman-coastline.jpg' >",
		"I served my mission in Paraguay, and this is near the Paraguay, Argentina, and Brazil border. It's probably the best thing in/near Paraguay." +
			"<img alt='Iguazu Falls img' width=100% src='https://img.flytap.com/cities/iguassu-falls.jpg' >",
		"I have always loved bears, since I was a little kid. I have always wanted to see the fish in Alaska. Apparently, this is one of the best places to see them." +	
			"<img alt='Katmai NP img' width=100% src='https://www.ajharrisonphoto.com/img/s/v-3/p1954186568-5.jpg' >",
		"The Swiss Alps would be cool to see, especially this peak." +	
			"<img alt='Matterhorn img' width=100% src='https://www.outdooractive.com/img//800/24516005/.jpg' >",
		"My wife's family comes from Norway, and I think the fjords are beautiful." +	
			"<img alt='Nærøyfjord img' width=100% src='https://static1.squarespace.com/static/5549f941e4b0be890383c7c4/t/56b4a9994d088e723de53365/1454680475379/naeroyfjorden.jpg' >",
		"I would love to backpack up in the cascades. The mountains are breathtaking." +	
			"<img alt='N Cascades NP img' width=100% src='https://www.gannett-cdn.com/-mm-/e6c17e797b5584fba45ce76a17ac39049b00308b/c=0-0-1498-846/local/-/media/2018/10/09/USATODAY/USATODAY/636746887858298738-NorthCascadesNPMichaelRickardSTESmall.jpg?width=3200&height=1680&fit=crop' >",
		"This is another cool waterfall. It is amazing how big it is." +	
			"<img alt='Victoria Falls img' width=100% src='https://victoriafallstourism.org/wp-content/uploads/2018/01/victoria_falls.jpg'>",
		"I would really enjoy seeing the history in DC. I could spend a lot of time at the Smithsonian alone." +	
			"<img alt='DC img' width=100% src='https://assets0.roadtrippers.com/uploads/poi_gallery_image/image/322393368/-quality_60_-interlace_Plane_-resize_1024x480_U__-gravity_center_-extent_1024x480/poi_gallery_image-image-91820fde-ce83-4f10-9055-4d64ab9d4c00.jpg'>"
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
  
  

  
  
  var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-87, 13],
      zoom: 5
  });
});



var map;

function startTheShow() {
	navigator.geolocation.getCurrentPosition(function(location, errorCode) {
    	if (errorCode == 1) {
       		alert('Y U NO GIVE LOCATION?');
    	} else {
    		console.log(location.coords)
    		initMap(location.coords.latitude, location.coords.longitude)
    	}
	});	
}

function initMap(latitude, longitude) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    zoom: 85,
     mapTypeId: google.maps.MapTypeId.SATELLITE
  });
  map.setTilt(45)
}
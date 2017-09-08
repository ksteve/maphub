  var map;
  
  function initMap() {
      // var socket = io();
      var icon = "./marker_2.png"

      // Create a map object and specify the DOM element for display.
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 10,
        minZoom: 2
      });

      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){

          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          map.setCenter(pos);
        })
      }

    // double click event
    google.maps.event.addListener(map, 'dblclick', function(e) {
      var positionDoubleclick = e.latLng;
      var marker = new google.maps.Marker(
        {
          position: positionDoubleclick
          ,map: map
          //,icon: icon
        });
        
        socketClient.emit('addMarker', {position: marker.position, icon: marker.icon});   

        // socket.emit(marker)

      // if you don't do this, the map will zoom in
      e.preventDefault();
    });
  }
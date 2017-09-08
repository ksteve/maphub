var socketClient = io();

socketClient.on('connection', function(socket){
    console.log("connected");    
})

socketClient.on('addMarker', function(marker){
    console.log("add marker recieved");    
    var newMarker = new google.maps.Marker(
        {
          position: marker.position,
          animation: google.maps.Animation.DROP
        });

    newMarker.setMap(map);
    $("#marker-alert").fadeTo(2000, 500).slideUp(500, function(){
        $("#marker-alert").slideUp(500);
    });

});

function addmarker(marker){
    socketClient.emit('addMarker', "hello");                        
}
    

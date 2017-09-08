
const baseUrl = "http://localhost:300/api/";
const addMarkerEndpoint = "addMarker";

module.exports = {

newMap : function newMap(marker){
            fetch(baseUrl + addMarkerEndpoint)
            .then((resp) => resp.json())
            .then(function(data){
                
            })
    },

deleteMap: function deleteMap(marker){
            fetch(baseUrl + addMarkerEndpoint)
            .then((resp) => resp.json())
            .then(function(data){
            
            })
    },

newMarker: function newMarker(marker){
                fetch(baseUrl + addMarkerEndpoint)
                .then((resp) => resp.json())
                .then(function(data){
                    
                })
    },

 deleteMarker : function deleteMarker(marker){
                fetch(baseUrl + addMarkerEndpoint)
                .then((resp) => resp.json())
                .then(function(data){
                    
                })
    }
}













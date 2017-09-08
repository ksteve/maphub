/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(1);
var socketApi = __webpack_require__(2);

window.initMap = map.initMap;





/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  
  initMap : function initMap() {
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
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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
    


/***/ })
/******/ ]);
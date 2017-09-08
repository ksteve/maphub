var express = require('express');
var mongoose = require('mongoose');
var http = require('http');
var io = require('socket.io');
var models = require('./models/models.js');
var path = require('path');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "../public")))
app.use(express.static(path.join(__dirname, "../public/js")))
app.use(express.static(path.join(__dirname, "../public/css")))

// Connect to our mongo database
mongoose.connect('mongodb://kylestevenson:Ky_132431R@ds149763.mlab.com:49763/maphub');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var server = http.createServer(app).listen(port, function() {
    console.log('Server listening on port ' + port);
});

var socketServer = io.listen(server);

//root
app.get('/', function(req, res){
    console.log(path.join(__dirname, "../public/index.html"));
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//add map
app.post("/maps", function(req, res){
    console.log(req);
});

//remove map
app.delete("/maps/:mapID", function(req, res){
    console.log(req);
});

//add marker
app.post('/maps/:mapID/markers', function(req, res){
    console.log(req);
});

//remove marker
app.post('/maps/:mapID/markers/:markerID', function(req, res){S
    console.log(req);
});

socketServer.on('connection', function(socket){
    console.log('user connected');

    socket.on('addMarker', function(marker){
        socket.broadcast.emit('addMarker', marker);
        console.log('add marker..');
    });
});




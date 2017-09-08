'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MarkerSchema = new Schema({
    name : { type: String, index: true, unique: true},
    color : String,
    owner: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    location: {
        lat: Number,
        lng: Number
    },
    meta : {
        creation_date: {type: Date, default: Date.now }
    }
});

module.exports = mongoose.model('Marker', MarkerSchema);
'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name : { type: String, index: true, unique: true},
    owner: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    markers: [{ type: Schema.ObjectId, ref: 'Marker'}],
    maps: [{type: Schema.ObjectId, ref: 'Map'}],
    meta : {
        creation_date: {type: Date, default: Date.now }
    }
});

module.exports = mongoose.model('User', UserSchema);
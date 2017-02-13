/**
 * Created by GrooshBene on 2017-02-13.
 */
var mongoose = require('mongoose');
var randomString = require('randomString');

function connectDB(url){
    mongoose.connect(url, function(err){
        if(err){
            console.log("Mongo DB Connection Error!");
            throw err;
        }
    })
}

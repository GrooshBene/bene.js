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

function initSchema(name, schema){
    var dbSchema = mongoose.Schema;
    var temp_schema = new dbSchema(schema);

    return mongoose.model(name, temp_schema);
}
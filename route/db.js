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

function dbPush(schema, callback){
    schema.save(function (err) {
        if(err){
            console.log("Data Push Failed");
            throw err;
        }
        else{
            console.log("Data Added : " + schema);
        }
    })
}

function dbSearch(schema, searchQuery, callback){
    schema.find(searchQuery, function (err, result) {
        if(err){
            return callback(err);
        }
        return callback(result);
    })
}

function dbUpdate(schema, searchQuery, updateQuery, callback){
    schema.findOneAndUpdate(searchQuery, updateQuery, function (err, result) {
        if(err){
            return callback(err);
        }
        return callback(result);
    })
}

function dbSearchAll(schema, callback){
    schema.find({}, function (err, result) {
        if(err){
            return callback(err);
        }
        return callback(result);
    })
}

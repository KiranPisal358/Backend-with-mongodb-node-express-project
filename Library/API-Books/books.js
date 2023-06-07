
const mongoose = require('mongoose');

// creating the schema-----
const librarySchema = mongoose.Schema({
    bname:String,
    bauthor:String,
    publisher:String,
    publishedYear:Number,
    price:Number,
    category:String,
    latestEdition:String
    });
    module.exports=mongoose.model('books',librarySchema);
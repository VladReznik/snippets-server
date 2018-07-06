var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


//Models
Category = require('./models/category');
SubCategory = require('./models/subcategory');
//Connect

mongoose.connect('mongodb://localhost/snippets');

var db = mongoose.connection;

app.get('/', function (req, res) {
    res.send('Use /api/category or /api/product or /api/tags or /api/comments');
});


app.get('/api/categories', function (req, res) {
    Category.getCategories(function (err,categories) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(categories);
    });
});

app.get('/api/subcategories', function (req, res) {
    SubCategory.getSubCategories(function (err,subcategories) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(subcategories);
    });
});


app.listen(3000);
console.log('I am Running on 3000');
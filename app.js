var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

//Models
Category = require('./models/category');
SubCategory = require('./models/subcategory');
Product = require('./models/product');
Tag = require('./models/tags');
Comment = require('./models/comments');
//Connect

mongoose.connect('mongodb://localhost/snippets');

var db = mongoose.connection;

app.get('/', function (req, res) {
    res.send('Use /api/category or /api/subcategory or /api/product or /api/tags or /api/comments');
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

app.post('/api/categories', function (req, res) {
    var category = req.body;
    Category.addCategories(category, function (err,category) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(category);
    });
});

app.put('/api/categories/:_id', function (req, res) {
    var id = req.params._id;
    var category = req.body;
    Category.updateCategories(id,category,{}, function (err,category) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(category);
    });
});

app.delete('/api/categories/:_id', function (req, res) {
    var id = req.params._id;
    Category.removeCategories(id, function (err,category) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(category);
    });
});

//End Categories

app.get('/api/subcategories', function (req, res) {
    SubCategory.getSubCategories(function (err,subcategories) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(subcategories);
    });
});

app.post('/api/subcategories', function (req, res) {
    var subcategory = req.body;
    SubCategory.addSubCategories(subcategory, function (err,subcategory) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(subcategory);
    });
});

app.put('/api/subcategories/:_id', function (req, res) {
    var id = req.params._id;
    var subcategories = req.body;
    SubCategory.updateSubCategories(id,subcategories,{}, function (err,subcategory) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(subcategory);
    });
});

//End SubCategories

app.get('/api/products', function (req, res) {
    Product.getProducts(function (err,products) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(products);
    });
});

app.get('/api/products/:_id', function (req, res) {
    Product.getProductsById(req.params._id, function (err,product) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(product);
    });
});


app.post('/api/products', function (req, res) {
    var product = req.body;
    Product.addProducts(product, function (err,product) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(product);
    });
});

app.put('/api/products/:_id', function (req, res) {
    var id = req.params._id;
    var product = req.body;
    Product.updateCategories(id,product,{}, function (err,product) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(product);
    });
});

//End Products
app.get('/api/tags', function (req, res) {
    Tag.getTags(function (err,tags) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(tags);
    });
});


//End Tags

app.get('/api/comments', function (req, res) {
    Comment.getComments(function (err,comments) {
        if(err){
            throw err;
            console.log('Some error');
        }
        res.json(comments);
    });
});

//End Comments

app.listen(3000);
console.log('I am Running on 3000');
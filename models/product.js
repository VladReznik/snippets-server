var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    subcategory:{
        type: String,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    img:{
        type: String,
        required:true
    },
});

var Product = module.exports = mongoose.model('Product', productSchema);

//get products

module.exports.getProducts = function (callback,limit) {
    Product.find(callback).limit(limit);
};

//get productsById

module.exports.getProductsById = function (id,callback) {
    Product.findById(id, callback);
};
//addProduct
module.exports.addProducts = function (product,callback) {
    Product.create(product, callback);
};

//update Product
module.exports.updateCategories = function (id, product, options, callback) {
    var query = {_id:id};
    var update = {
        subcategory:subcategory.name,
        title:title.name,
        description:description.name,
        img:img.name,

    };
    Product.findOneAndUpdate(query, update, options, callback);
};


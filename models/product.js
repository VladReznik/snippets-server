var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var Product = module.exports = mongoose.model('Product', categorySchema);

//get categories

module.exports.getCategories = function (callback,limit) {
    Category.find(callback).limit(limit);
}

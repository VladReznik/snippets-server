var mongoose = require('mongoose');

var SubCategorySchema = mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },

});

var SubCategory = module.exports = mongoose.model('SubCategory', SubCategorySchema);

//get categories

module.exports.getSubCategories = function (callback, limit) {
    SubCategory.find(callback).limit(limit);
}

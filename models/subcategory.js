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

//get subcategories

module.exports.getSubCategories = function (callback, limit) {
    SubCategory.find(callback).limit(limit);
};

//add subcategories
module.exports.addSubCategories = function (subcategory, callback) {
    SubCategory.create(subcategory, callback);
};

//update subcategories
module.exports.updateSubCategories = function (id, category, options, callback) {
    var query = {_id:id};
    var update = {
        category:category.name,
        name:category.name
    };
    SubCategory.findOneAndUpdate(query, update, options, callback);
};

//add Delete
module.exports.removeCategories = function (id, callback) {
    var query = {_id:id}
    SubCategory.remove(query, callback);
};


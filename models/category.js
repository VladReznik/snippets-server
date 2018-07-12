var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

var Category = module.exports = mongoose.model('Category', categorySchema);

//get categories
module.exports.getCategories = function (callback, limit) {
    Category.find(callback).limit(limit);
};

//add categories
module.exports.addCategories = function (category, callback) {
    Category.create(category, callback);
};

//update categories
module.exports.updateCategories = function (id, category, options, callback) {
    var query = {_id:id};
    var update = {
        name:category.name
    }
    Category.findOneAndUpdate(query, update, options, callback);
};

//add Delete
module.exports.removeSubCategories = function (id, callback) {
    var query = {_id:id}
    Category.remove(query, callback);
};


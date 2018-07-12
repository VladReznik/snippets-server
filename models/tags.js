var mongoose = require('mongoose');

var tagSchema = mongoose.Schema({
        productId:{
            type: String,
            required:true
        },
        html:{
            type: String,
            required:false
        },
        css:{
            type: String,
            required:false
        },
        js:{
            type: String,
            required:false
        },
});

var Tag = module.exports = mongoose.model('Tag',  tagSchema);

//get tags

module.exports.getTags = function (callback,limit) {
    Tag.find(callback).limit(limit);
};

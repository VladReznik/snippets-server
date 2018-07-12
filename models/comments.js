var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
        productId:{
            type: String,
            required:true
        },
        name: {
            type:String,
            required:true
        },
        text: {
            type:String,
            required:true
        }

});

var Comment = module.exports = mongoose.model('Comment',  commentSchema);

//get Comments

module.exports.getComments = function (callback,limit) {
    Comment.find(callback).limit(limit);
};

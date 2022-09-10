const {Schema, model, Types} = require("mongoose");

const BlogSchema = new Schema({
    title: {type: String},
    author: {type: Types.ObjectId, ref:"User"},
    url: {type: String},
    likes: {type: Number}
});

const BlogModel = model("Blog", BlogSchema);
module.exports = BlogModel;

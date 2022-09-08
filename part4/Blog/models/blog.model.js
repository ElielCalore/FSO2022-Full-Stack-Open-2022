const mongoose = require("mongoose");
const {Schema, model} = require("mongoose");

const BlogSchema = new Schema({
    title: {type: String},
    author: {type: String},
    url: {type: String},
    likes: {type: Number}
});

const BlogModel = model("Blog", BlogSchema);
module.exports = BlogModel;

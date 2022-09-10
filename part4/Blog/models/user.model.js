const mongoose = require("mongoose")
const {Schema, model} = require("mongoose")

const UserSchema = new Schema ({
    username: {type:String, required:true, trim: true},
    name: {type: String, required: true, trim:true},
    passwordHash: {type: String, required:true, trim:true}
})

const UserModel = model("User", UserSchema);
module.exports = UserModel;
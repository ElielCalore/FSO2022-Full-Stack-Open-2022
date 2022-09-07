const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const ContactSchema = new Schema({
  name: { type: String },
  number: { type: Number },
});
const ContactModel = model("Contact", ContactSchema);

module.exports = ContactModel;

const { text } = require("express");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  description: {
    typeof: String,
    default: 0,
  },
  bgcolor: String,
  panelcolor: String,
  textcolor: String,
});
module.exports = mongoose.model("Product", productSchema);
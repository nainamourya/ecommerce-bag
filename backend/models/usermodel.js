const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  contact: Number,
  isadmin: Boolean,
  order: {
    typeof: Array,
    default: [],
  },
  cart: {
    typeof: Array,
    default: [],
  },
  picture: String,
});

module.exports = mongoose.model("User", userSchema);

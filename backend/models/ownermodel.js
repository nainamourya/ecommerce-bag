import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,

  products: {
    type: Array,
    default: [],
  },

  picture: String,
  gstin: String,
});

export default mongoose.model("Owner", ownerSchema);

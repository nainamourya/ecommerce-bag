import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://ecom-bag-web:naina%401234@ecommerce.pyrak.mongodb.net/ecom-bag?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Mongoose connected successfully");
  })
  .catch((err) => {
    console.log("Mongoose connection error:", err);
  });

export default mongoose.connection;

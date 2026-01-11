import mongoose from "mongoose";
import debug from "debug";
import config from "config";

const dbgr = debug("development:mongoose");

mongoose
  .connect(`${config.get("MongoURI")}/ecom-bag`)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    dbgr("Mongoose connected successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error");
    console.error(err);
    dbgr("Mongoose connection error:", err);
  });

export default mongoose.connection;

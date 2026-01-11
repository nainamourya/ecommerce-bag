import express from "express";
import userModel from "../models/usermodel.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("user Router Working");
});

router.post("/register", async (req, res) => {
  try
  {
    let { fullname, email, password } = req.body;
  await userModel.create({ fullname, email, password });
  res.send("User Registered");  
  }
  catch(err)
  {
    res.status(500).json({ error: err.message });
  }
});

export default router;

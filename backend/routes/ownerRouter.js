import express from "express";
import ownerModel from "../models/ownermodel.js";

const router = express.Router();

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    try {
      let owners = await ownerModel.find();
      if (owners.length > 0) {
        return res.status(500).send("Owner already exists");
      }

      const { fullname, email, password } = req.body;

      const createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
      });

      res.status(201).json(createdOwner);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
}

router.get("/", (req, res) => {
  res.send("Owner Router Working");
});

export default router;

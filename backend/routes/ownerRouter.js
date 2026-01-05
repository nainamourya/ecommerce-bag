import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Owner Router Working");
});

export default router;

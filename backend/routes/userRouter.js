import express from "express";
import authControllers from "../controllers/authControllers.js";


const router = express.Router();

router.get("/", (req, res) => {
  res.send("user Router Working");
});

router.post("/register", authControllers.register);
router.post("/login", authControllers.login);

export default router;

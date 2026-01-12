import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import ownerRouter from "./routes/ownerRouter.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import "./config/mongoose-connection.js"; // 🔥 DB connection
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// View engine (only if you really use EJS)
app.set("view engine", "ejs");
app.use("/owners", ownerRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
// Test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

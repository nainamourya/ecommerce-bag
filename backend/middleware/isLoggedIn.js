import jwt from "jsonwebtoken";
import userModel from "../models/usermodel.js";

const isLoggedIn = async (req, res, next) => {
  if (!req.cookies.token) {
    return res.status(401).json({ message: "You need to login first" });
  }

  try {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);

    const user = await userModel
      .findOne({ email: decoded.email })
      .select("-password");

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default isLoggedIn;

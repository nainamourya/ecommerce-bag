import userModel from "../models/usermodel.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

const authControllers = {
  register: async (req, res) => {
    try {
      let { fullname, email, password } = req.body;

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const user = await userModel.create({
        fullname,
        email,
        password: hash,
      });

      let token = generateToken(user);
      res.cookie("token", token);
      res.json({ message: "user registered successfully", token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  login: async (req, res) => {
    try {
      let { email, password } = req.body;

      const user = await userModel.findOne({ email });
      if (!user) return res.status(401).json({ error: "Invalid credentials" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(401).json({ error: "Invalid credentials" });

      let token = generateToken(user);
      res.cookie("token", token);
      res.json({ message: "user logged in successfully", token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

export default authControllers;

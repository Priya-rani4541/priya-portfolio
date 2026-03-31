import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Admin from "../models/Admin.js";

const router = express.Router();

// @route POST /api/admin/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // generate token
    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      _id: admin._id,
      email: admin.email,
      token,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
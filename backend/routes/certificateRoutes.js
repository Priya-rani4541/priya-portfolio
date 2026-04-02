// routes/certificateRoutes.js
import express from "express";
import Certificate from "../models/Certificate";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Certificate.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching certificates" });
  }
});

export default router;
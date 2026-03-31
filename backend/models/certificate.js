// models/Certificate.js
import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  title: String,
  organization: String,
  date: String,
  image: String,
  link: String
});

export default mongoose.model("Certificate", certificateSchema);
import mongoose from "mongoose";

const outageSchema = new mongoose.Schema({
  id: Number,
  coordinate: {
    latitude: Number,
    longitude: Number,
  },
  areas: [String],
  title: String,
  description: String,
  image: String, 
  rating: String,
  tobe: Boolean,
  reason: String,
  status: String,
});

export default mongoose.model("Outage", outageSchema);

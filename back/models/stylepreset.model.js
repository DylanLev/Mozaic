
const mongoose = require("mongoose");

const StylePresetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  nsfw: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    enum: ["fantasy", "realistic", "humor", "nsfw", "parody", "other"],
    default: "other",
  },
  popularityScore: {
    type: Number,
    default: 0, // Rank trending presets
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("StylePreset", StylePresetSchema);

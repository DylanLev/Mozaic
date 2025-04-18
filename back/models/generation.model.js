const mongoose = require('mongoose');

const generationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  originalImageUrl: {
    type: String,
    required: true
  },
  generatedImageUrl: {
    type: String
  },
  selectedStyle: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  promptUsed: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  timeToGenerate: {
    type: Number
  }
});

module.exports = mongoose.model('Generation', generationSchema);

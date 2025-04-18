const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  credits: {
    type: Number,
    default: 5 // adjust number of credits
  },
  generations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Generation'
  }],
  referralCode: {
    type: String
  },
  referredBy: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema);

const express = require('express');
const User = require('../models/user.model.js');
const router = express.Router();

// Endpoint to create a new user
router.post('/users', async (req, res) => {
  const { email, name, profileImage } = req.body;
  try {
    const newUser = new User({ email, name, profileImage });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user' });
  }
});

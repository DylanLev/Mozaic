const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./db/db.js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define your API routes here (example)
// const userRoutes = require('./routes/user');
// app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

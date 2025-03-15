const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db'); // <-- Importing your DB connection

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB using the URI from .env
connectDB();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
const studentRoutes = require('./routes/studentRoutes');
app.use('/api', studentRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

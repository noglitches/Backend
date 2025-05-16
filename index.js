const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
require('dotenv').config();

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/', userRoutes);
app.use('/', studentRoutes);

const PORT = process.env.PORT || 3005;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/StudentsManagementDB';


// MongoDB connection
mongoose.connect(MONGO_URI)
    .then( () => {
        console.log('Connected successfully to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Students Management API!');
});
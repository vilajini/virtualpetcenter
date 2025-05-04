const express = require('express');
const cors = require('cors');

const petRoutes = require('./routes/petRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// All pet-related routes
app.use('/pets', require('./routes/petRoutes'));

module.exports = app;

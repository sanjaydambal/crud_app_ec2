const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// Middleware
app.use(bodyParser.json())


// Routes
app.use('/api', itemRoutes);

// Start the server
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/crudApp')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

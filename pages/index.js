import fs from 'fs'
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route for serving your HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
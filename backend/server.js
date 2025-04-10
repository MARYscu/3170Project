const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static frontend files from "public" folder
app.use(express.static(path.join(__dirname, '../frontend/public')));

// API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

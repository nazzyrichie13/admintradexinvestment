
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for messages
let messages = [];

// Endpoint to get all messages
app.get('/messages', (req, res) => {
  res.json(messages);
});

// Endpoint to post a new message
app.post('/messages', (req, res) => {
  const message = req.body;
  messages.push(message);
  res.status(201).json({ message: 'Message received' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

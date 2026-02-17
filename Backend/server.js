const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Built-in version of body-parser

// Mock Database (In-memory)
let messages = [];

// GET: Check if the server is alive or fetch messages
app.get("/api/contact", (req, res) => {
  res.status(200).json(messages);
});

// POST: Receive name, email, and message
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please provide all fields." });
  }

  const newMessage = { id: Date.now(), name, email, message };
  messages.push(newMessage);

  console.log("New message received:", newMessage);

  res.status(201).json({ success: true, data: newMessage });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

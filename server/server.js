const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// In-memory storage for contact messages (replace with MongoDB later)
let contactMessages = [];
let messageId = 1;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, './client/build')));

// API endpoint
app.get('/api/projects', (req, res) => {
    // In a real app, you would fetch this from the database
    const projects = [
        { id: 1, name: 'Project 1', description: 'This is the first project.' },
        { id: 2, name: 'Project 2', description: 'This is the second project.' }
    ];
    res.json(projects);
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = {
      _id: messageId.toString(),
      name,
      email,
      message,
      createdAt: new Date()
    };
    contactMessages.push(newMessage);
    messageId++;
    console.log('New contact message received:', newMessage);
    res.status(201).json({ success: true });
  } catch (err) {
    console.error('Error saving contact message:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Get all contact messages
app.get('/api/contact', async (req, res) => {
  try {
    res.json(contactMessages);
  } catch (err) {
    console.error('Error fetching contact messages:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Delete a contact message
app.delete('/api/contact/:id', async (req, res) => {
  try {
    const id = req.params.id;
    contactMessages = contactMessages.filter(msg => msg._id !== id);
    res.json({ success: true });
  } catch (err) {
    console.error('Error deleting contact message:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, './client/build/index.html');
  console.log('Serving index.html from:', indexPath);
  res.sendFile(indexPath);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Contact messages will be stored in memory (not persistent)');
}); 
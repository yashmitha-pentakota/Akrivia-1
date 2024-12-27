const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const db = require('./db');
 
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
// Test Route
app.get('/', (req, res) => {
  res.send('Hello, Node.js Server!');
});

app.post('/api/login',(req,res) => {
  console.log(req.body);
  const { username, password } = req.body;

  // Check if the username and password were provided
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  // Query the database to check if the user exists and the password matches
  const query = 'SELECT * FROM students WHERE username = ? AND password = ?';
  db.get(query, [username, password], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Database query error.' });
    }

    if (row) {
      // User found and password matches
      res.status(200).json({ message: 'Login successful.', user: row });
    } else {
      // No matching user found
      res.status(401).json({ error: 'Invalid username or password.' });
    }
  });
})
 
// Start the Server
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(cors());

// Read data from JSON file
const rawData = fs.readFileSync('data.json');
const data = JSON.parse(rawData);

// API endpoint to get all articles
app.get('/api/articles', (req, res) => {
  res.json(data.articles);
});

// API endpoint to get a single article by id
app.get('/api/articles/:id', (req, res) => {
  const article = data.articles.find(a => a.id === parseInt(req.params.id));
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: 'Article not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
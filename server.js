require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

let items = [];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.delete('/api/items/:id', (req, res) => {
  items = items.filter((item, index) => index !== parseInt(req.params.id));
  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
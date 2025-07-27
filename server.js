const express = require('express');
const app = express();
app.use(express.json());


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

app.listen(3000, () => console.log('Server running on port 3000'));
const express = require('express');
const app = express();

const postcards = require('./controllers/postcardsControllers');
const planets = require('./controllers/planetsControllers');

app.use(express.json());

app.use('/postcards', postcards);
app.use('/planets', planets);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.use((req, res, next) => {
  res.status(404).send('404 - Not Found');
});

module.exports = app;

const express = require('express');
const cors = require('cors');
const app = express();

const postcardsController = require('./controllers/postcardsControllers.js');
const planetsController = require('./controllers/planetsControllers.js');

app.use(express.json());
app.use(cors());

app.use('/postcards', postcardsController);
app.use('/planets', planetsController);

app.get('/', (req, res) => {
 res.send('Welcoem to Star Wars Postcards!');}
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.use("*", (req, res, next) => {
  res.status(404).send('404 - Not Found');
});

module.exports = app;

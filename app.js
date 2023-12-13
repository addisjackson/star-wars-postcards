const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const planetsControllers = require('./controllers/planetsControllers.js');
const path = require('path');
const planets = require('./routes/planetsRoutes');
const postcards = require('./routes/postCardRoutes');
const app = express();

require('events').EventEmitter.defaultMaxListeners = 15;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Uncomment the following line if needed
// const postcards = require('./routes/postCardRoutes');

app.use('/planets', planets);

// Uncomment the following lines if needed
app.use('/api/v1/postcards', postcards);
// app.get('/postcards/:id', postCardsControllers);

app.get('/', (req, res) => {
  res.send('Welcome to Planet Cards');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Default route
app.get('/api/v1', (req, res) => {
  res.send('Welcome to Planet Cards api route');
});

module.exports = app;

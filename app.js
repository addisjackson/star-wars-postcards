const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const postcards = require('./routes/postCardRoutes');
const planets = require('./routes/planetsRoutes'); // Import your postCardRoutes module
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Welcome to Planet Cards');
});

//app.use('/postcards', postcards);
app.use('/planets', planets);


// Default route
app.get('/api/v1', (req, res) => {
  res.send('Welcome to the api route!');
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;

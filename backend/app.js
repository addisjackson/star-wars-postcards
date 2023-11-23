const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postcards = require('./routes/postCardRoutes');
const planets = require('./routes/planetsRoutes'); 
const planetsControllers = require('./controllers/planetsControllers.js');
const postCardsControllers = require('./controllers/postCardsControllers.js');
const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(express.json());

//app.use('/postcards', postcards);
app.use('/planets', planetsControllers);
app.use('/postcards', postCardsControllers);


app.get('/planets', planetsControllers)



app.get('/', (req, res) => {
  res.send('Welcome to Planet Cards');
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Default route
app.get('/api/v1', (req, res) => {
  res.send('Welcome to the api route!');
});



module.exports = app;

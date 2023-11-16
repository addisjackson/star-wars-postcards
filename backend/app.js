const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postCardRouter = require('./routes/postCardRoutes')
const planetRouter = require('./routes/planetsRoutes'); // Import your postCardRoutes module
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Planet Cards');
});


app.use('/api/v1/', postCardRouter);
app.use('/api/v1/', planetRouter);



// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the main route!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

/** 
app.get('/api/v1/', async (req, res) => {
  const { sort } = req.query;

  try {
    let postcards;

    if (sort === 'asc') {
      // Fetch postcards sorted in ascending order
      postcards = await sortPostCardsByLocationAsc(); // Replace this with your actual query function
    } else if (sort === 'desc') {
      // Fetch postcards sorted in descending order
      postcards = await sortPostCardsByLocationDesc(); // Replace this with your actual query function
    } else {
      return res.status(400).send('Invalid sorting parameter');
    }

    res.json(postcards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
*/
module.exports = app;

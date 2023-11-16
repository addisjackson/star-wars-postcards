const express = require('express');
const postcards = express.Router();
const postCardsControllers = require('../controllers/postCardsControllers');

// Welcome route
postcards.get('/', async (req, res) => {
  res.send('Welcome to Planet Cards API route');
});

// CRUD routes for postcards
postcards.get('/postcards', postCardsControllers.getAllPostCards);
postcards.get('/postcards/:id', postCardsControllers.getPostCardById);


postcards.post('/postcards', postCardsControllers.createPostCard);
postcards.put('/postcards/:id', postCardsControllers.updatePostCard);
postcards.delete('/postcards/:id', postCardsControllers.deletePostCard);

// Middleware for sorting and filtering
postcards.use('/postcards', async (req, res, next) => {
  const { sort, film } = req.query;

  try {
    if (sort === 'asc') {
      req.sortedPostcards = await postCardsControllers.sortPostCardsByLocationAsc();
    } else if (sort === 'desc') {
      req.sortedPostcards = await postCardsControllers.sortPostCardsByLocationDesc();
    }

    if (film) {
      req.filteredPostcards = await postCardsControllers.filterPostCardsByFilm(film);
    }

    next(); // Move to the next middleware or route handler
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to handle sorted or filtered postcards
postcards.get('/postcards', (req, res) => {
  const { sortedPostcards, filteredPostcards } = req;

  if (sortedPostcards) {
    return res.json(sortedPostcards);
  } else if (filteredPostcards) {
    return res.json(filteredPostcards);
  } else {
    return res.status(400).send('Invalid sorting or filtering parameter');
  }
});

module.exports = postcards;

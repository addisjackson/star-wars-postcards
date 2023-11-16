// postCardRoutes.js

const express = require('express');
const router = express.Router();
const postCardsControllers = require('../controllers/postCardController');

// GET all postcards with optional sort query parameter
router.get('/postcards', async (req, res) => {
  try {
    const { sort } = req.query;
    const postcards = await postCardsControllers.getAllPostCards(sort);
    res.json(postcards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET a specific postcard by ID
router.get('/postcards/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const postcard = await postCardsControllers.getPostCardById(id);
    res.json(postcard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new postcard
router.post('/postcards', async (req, res) => {
  try {
    const newPostCard = req.body;
    const createdPostCard = await postCardsControllers.createPostCard(newPostCard);
    res.status(201).json(createdPostCard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT (update) a postcard by ID
router.put('/postcards/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPostCard = await postCardsControllers.updatePostCard(id, req.body);
    res.json(updatedPostCard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE a postcard by ID
router.delete('/postcards/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPostCard = await postCardsControllers.deletePostCard(id);
    res.json(deletedPostCard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Filter postcards by film
router.get('/postcards/filter', async (req, res) => {
  try {
    const { film } = req.query;
    const filteredPostcards = await postCardsControllers.filterPostCardsByFilm(film);
    res.json(filteredPostcards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

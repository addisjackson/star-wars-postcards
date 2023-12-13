const express = require('express');
const { getAllPostCards, getPostCard, createPostCard, deletePostCard, updatePostCard } = require('../controllers/postCardsControllers.js');
const { checkLocation, checkPrice, checkQuantity, checkFilms, validateUrl, validateJSONKeys } = require('../validations/checkPostCards');

const postcards = express.Router();

// Fetch all postcards
postcards.get('/', async (req, res) => {
  try {
    const allPostCards = await getAllPostCards();
    if (allPostCards[0]) {
      res.status(200).json(allPostCards);
    } else {
      res.status(500).json({ error: 'Server error!' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error!' });
  }
});

// Fetch a specific postcard by ID
postcards.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const postcard = await getPostCard(id);
    if (postcard) {
      res.json(postcard);
    } else {
      res.status(404).json({ error: 'PostCard not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error!' });
  }
});

// Create a new postcard
postcards.post('/', async (req, res) => {
  try {
    const postcard = req.body;
    const newPostCard = await createPostCard(postcard);
    if (!newPostCard) {
      return res.status(400).json({ error: 'Postcard not created' });
    }
    return res.status(201).json(newPostCard);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error!' });
  }
});
/**
const updatePostCardHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPostCard = await updatePostCard(id, req.body);
    if (!updatedPostCard) {
      return res.status(404).json({ error: 'PostCard not found' });
    }
    return res.status(200).json(updatedPostCard);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error!' });
  }
};

postcards.put('/:id', checkLocation, checkPrice, checkQuantity, checkFilms, validateUrl, validateJSONKeys, updatePostCardHandler);
*/

// Delete a postcard
postcards.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPostCard = await deletePostCard(id);
    if (!deletedPostCard) {
      return res.status(404).json({ error: 'PostCard not found' });
    }
    return res.status(200).json({ message: 'PostCard deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error!' });
  }
});

module.exports = postcards

// routes.js

const express = require('express');
const {
  getAllPostCardsController,
  getPostCardByIdController,
  createPostCardController,
  updatePostCardController,
  deletePostCardController,
  getPostCardsAfterYearController,
  getPostCardsBeforeYearController,
  getPostCardsByCharacterNameController,
  getPostCardsByFilmController,
  sortPostCardsByReleaseYearController,
  sortPostCardsByPlanetNameController,
} = require('./controllers');

const router = express.Router();

// Postcard routes
router.get('/postcards', getAllPostCardsController);
router.get('/postcards/:id', getPostCardByIdController);
router.post('/postcards', createPostCardController);
router.put('/postcards/:id', updatePostCardController);
router.delete('/postcards/:id', deletePostCardController);

// Additional postcard routes
router.get('/postcards/after/:year', getPostCardsAfterYearController);
router.get('/postcards/before/:year', getPostCardsBeforeYearController);
router.get('/postcards/character/:characterName', getPostCardsByCharacterNameController);
router.get('/postcards/film/:filmId', getPostCardsByFilmController);
router.get('/postcards/sort/release-year', sortPostCardsByReleaseYearController);
router.get('/postcards/sort/planet-name', sortPostCardsByPlanetNameController);

module.exports = router;

// controllers.js
const {
    getAllPostCards,
    getPostCardById,
    createPostCard,
    updatePostCard,
    deletePostCard,
    getPostCardsAfterYear,
    getPostCardsBeforeYear,
    getPostCardsByCharacterName,
    getPostCardsByFilm,
    sortPostCardsByReleaseYear,
    sortPostCardsByPlanetName,
  } = require('../queries/postCards');
  
  // Get all postcards
  const getAllPostCardsController = async (req, res) => {
    try {
      const postcards = await getAllPostCards();
      res.json(postcards);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Get postcard by ID
  const getPostCardByIdController = async (req, res) => {
    const { id } = req.params;
    try {
      const postcard = await getPostCardById(id);
      if (postcard) {
        res.json(postcard);
      } else {
        res.status(404).send('Postcard not found');
      }
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Create a new postcard
  const createPostCardController = async (req, res) => {
    const { body } = req;
    try {
      const newPostCard = await createPostCard(body);
      res.json(newPostCard);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Update a postcard by ID
  const updatePostCardController = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const updatedPostCard = await updatePostCard(id, body);
      if (updatedPostCard) {
        res.json(updatedPostCard);
      } else {
        res.status(404).send('Postcard not found');
      }
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Delete a postcard by ID
  const deletePostCardController = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedPostCard = await deletePostCard(id);
      if (deletedPostCard) {
        res.json(deletedPostCard);
      } else {
        res.status(404).send('Postcard not found');
      }
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Get postcards after a specific release year
const getPostCardsAfterYearController = async (req, res) => {
    const { year } = req.params;
    try {
      const postcards = await getPostCardsAfterYear(year);
      res.json(postcards);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Get postcards before a specific release year
  const getPostCardsBeforeYearController = async (req, res) => {
    const { year } = req.params;
    try {
      const postcards = await getPostCardsBeforeYear(year);
      res.json(postcards);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Get postcards by character name
  const getPostCardsByCharacterNameController = async (req, res) => {
    const { characterName } = req.params;
    try {
      const postcards = await getPostCardsByCharacterName(characterName);
      res.json(postcards);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Get postcards by film
  const getPostCardsByFilmController = async (req, res) => {
    const { filmId } = req.params;
    try {
      const postcards = await getPostCardsByFilm(filmId);
      res.json(postcards);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Sort postcards by release year
  const sortPostCardsByReleaseYearController = async (req, res) => {
    try {
      const postcards = await sortPostCardsByReleaseYear();
      res.json(postcards);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  
  // Sort postcards by planet name
  const sortPostCardsByPlanetNameController = async (req, res) => {
    try {
      const postcards = await sortPostCardsByPlanetName();
      res.json(postcards);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
    
  module.exports = {
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
  };
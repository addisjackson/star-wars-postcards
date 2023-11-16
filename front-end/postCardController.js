const postCardService = require('../services/postCardService');

const getAllPostCards = async (req, res, next) => {
    try {
      const { sort } = req.query;
      let postcards;
  
      if (sort === 'asc') {
        postcards = await postCardService.sortPostCardsByLocationAsc();
      } else if (sort === 'desc') {
        postcards = await postCardService.sortPostCardsByLocationDesc();
      } else {
        postcards = await postCardService.getAllPostCards();
      }
  
      res.json(postcards);
    } catch (error) {
      next(error);
    }
  };
  
const getPostCardById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const postcard = await postCardService.getPostCardById(id);
    if (!postcard) {
      return res.status(404).json({ error: 'Postcard not found' });
    }
    res.json(postcard);
  } catch (error) {
    next(error);
  }
};

const createPostCard = async (req, res, next) => {
  const newPostCard = req.body;
  try {
    const createdPostCard = await postCardService.createPostCard(newPostCard);
    res.status(201).json(createdPostCard);
  } catch (error) {
    next(error);
  }
};

const updatePostCard = async (req, res, next) => {
  const { id } = req.params;
  const updatedPostCard = req.body;
  try {
    const result = await postCardService.updatePostCard(id, updatedPostCard);
    if (!result) {
      return res.status(404).json({ error: 'Postcard not found' });
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const deletePostCard = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedPostCard = await postCardService.deletePostCard(id);
    if (!deletedPostCard) {
      return res.status(404).json({ error: 'Postcard not found' });
    }
    res.json(deletedPostCard);
  } catch (error) {
    next(error);
  }
};


const filterPostCardsByFilm = async (req, res, next) => {
    const { film } = req.query;
    try {
      const postcards = await postCardService.filterPostCardsByFilm(film);
      res.json(postcards);
    } catch (error) {
      next(error);
    }
  };
  
module.exports = {
  getAllPostCards,
  getPostCardById,
  createPostCard,
  updatePostCard,
  deletePostCard,
  filterPostCardsByFilm
};

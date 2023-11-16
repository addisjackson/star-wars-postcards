const postCardRepository = require('../db/postCardRepository');

const getAllPostCards = async () => {
  try {
    return await postCardRepository.getAllPostCards();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPostCardById = async (id) => {
  try {
    const postcard = await postCardRepository.getPostCardById(id);
    if (!postcard) {
      throw new Error('Postcard not found');
    }
    return postcard;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createPostCard = async (postcardData) => {
  try {
    // Perform any necessary data validation here before passing to repository
    const newPostCard = await postCardRepository.createPostCard(postcardData);
    return newPostCard;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updatePostCard = async (id, postcardData) => {
  try {
    const existingPostCard = await postCardRepository.getPostCardById(id);
    if (!existingPostCard) {
      throw new Error('Postcard not found');
    }
    // Perform any necessary data validation here before passing to repository
    const updatedPostCard = await postCardRepository.updatePostCard(id, postcardData);
    return updatedPostCard;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deletePostCard = async (id) => {
  try {
    const existingPostCard = await postCardRepository.getPostCardById(id);
    if (!existingPostCard) {
      throw new Error('Postcard not found');
    }
    return await postCardRepository.deletePostCard(id);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const filterPostCardsByFilm = async (filmTitle) => {
  try {
    const postcards = await postCardRepository.filterPostCardsByFilm(filmTitle);
    return postcards;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const sortPostCardsByLocationAsc = async () => {
  try {
    const postcards = await postCardRepository.sortPostCardsByLocationAsc();
    return postcards;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const sortPostCardsByLocationDesc = async () => {
  try {
    const postcards = await postCardRepository.sortPostCardsByLocationDesc();
    return postcards;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getAllPostCards,
  getPostCardById,
  createPostCard,
  updatePostCard,
  deletePostCard,
  filterPostCardsByFilm,
  sortPostCardsByLocationAsc,
  sortPostCardsByLocationDesc,
};

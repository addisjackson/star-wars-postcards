const pool = require("../db/dbConfig.js");


const getAllPostcards = async () => {
  try {
    const allPostcards = await pool.any("SELECT * FROM postcards");
    return allPostcards;
  } catch (err) {
    return err;
  }
};

const getPostcard = async (id) => {
  try {
    const onePostcard = await pool.one("SELECT * FROM postcards WHERE id=$1", id);
    return onePostcard;
  } catch (error) {
    return error;
  }
};

const createPostcard = async (postcard) => {
  const { image_url, location, price, quantity, synopsis, films, url } = postcard;
  try {
    const newPostcard = await pool.one(
      "INSERT INTO postcards (image_url, location, price, quantity, synopsis, films, url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [postcard.image_url, postcard.location, postcard.price, postcard.quantity, postcard.synopsis, postcard.films, postcard.url]
    );
    return newPostcard;
  } catch (error) {
    return error;
  }
};

const deletePostcard = async (id) => {
  try {
    const deletedPostcard = await pool.one("DELETE FROM postcards WHERE id = $1 RETURNING *", id);
    return deletedPostcard;
  } catch (err) {
    return err;
  }
};
const updatePostcard = async (id, postcard) => {
  const { image_url, location, price, quantity, synopsis, films, url } = postcard;
  try {
    const updatedPostcard = await pool.one(
      'UPDATE postcards SET image_url = $1, location = $2, price = $3, quantity = $4, synopsis = $5, films = $6, url = $7 WHERE id = $8 RETURNING *',
      [image_url, location, price, quantity, synopsis, films, url, id]
    );
    return updatedPostcard;
  } catch (err) {
    return err;
  }
};


const filterPostcardsByFilm = async (filmTitle) => {
  try {
    const { rows } = await pool.query('SELECT * FROM postcards WHERE $1 = ANY (films)', [filmTitle]);
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const sortPostcardsByLocationAsc = async () => {
  try {
    const result = await pool.query('SELECT * FROM postcards ORDER BY location ASC');
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const sortPostcardsByLocationDesc = async () => {
  try {
    const result = await pool.query('SELECT * FROM postcards ORDER BY location DESC');
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getAllPostcards,
  getPostcard,
  createPostcard,
  updatePostcard,
  deletePostcard,
  filterPostcardsByFilm,
  sortPostcardsByLocationAsc,
  sortPostcardsByLocationDesc
};

const pool = require('./db.js');

const getAllPostcards = async () => {
  try {
    const { rows } = await pool.query('SELECT * FROM postcards');
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPostcardById = async (id) => {
  try {
    const { rows } = await pool.query('SELECT * FROM postcards WHERE id = $1', [id]);
    return rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createPostcard = async (postcard) => {
  const { image_url, location, price, quantity, synopsis, films, url } = postcard;
  try {
    const { rows } = await pool.query(
      'INSERT INTO postcards (image_url, location, price, quantity, synopsis, films, url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [image_url, location, price, quantity, synopsis.toLowerCase(), films, url]
    );
    return rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const updatePostcard = async (id, postcard) => {
  const { image_url, location, price, quantity, synopsis, films, url } = postcard;
  try {
    const { rows } = await pool.query(
      'UPDATE postcards SET image_url = $1, location = $2, price = $3, quantity = $4, synopsis = $5, films = $6, url = $7 WHERE id = $8 RETURNING *',
      [image_url, location, price, quantity, synopsis.toLowerCase(), films, url, id]
    );
    return rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deletePostcard = async (id) => {
  try {
    const { rows } = await pool.query('DELETE FROM postcards WHERE id = $1 RETURNING *', [id]);
    return rows[0];
  } catch (error) {
    console.error(error);
    throw error;
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
  getPostcardById,
  createPostcard,
  updatePostcard,
  deletePostcard,
  filterPostcardsByFilm,
  sortPostcardsByLocationAsc,
  sortPostcardsByLocationDesc
};

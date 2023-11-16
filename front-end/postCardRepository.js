const pool = require('./dbConfig');

const getAllPostCards = async () => {
  try {
    const { rows } = await pool.query('SELECT * FROM postcards');
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPostCardById = async (id) => {
  try {
    const { rows } = await pool.query('SELECT * FROM postcards WHERE id = $1', [id]);
    return rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createPostCard = async ({ location, price, quantity, synopsis, films, url }) => {
  try {
    const query = 'INSERT INTO postcards (location, price, quantity, synopsis, films, url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [location, price, quantity, synopsis, films, url];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updatePostCard = async (id, { location, price, quantity, synopsis, films, url }) => {
  try {
    const query = 'UPDATE postcards SET location = $1, price = $2, quantity = $3, synopsis = $4, films = $5, url = $6 WHERE id = $7 RETURNING *';
    const values = [location, price, quantity, synopsis, films, url, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deletePostCard = async (id) => {
  try {
    const { rows } = await pool.query('DELETE FROM postcards WHERE id = $1 RETURNING *', [id]);
    return rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const filterPostCardsByFilm = async (filmTitle) => {
  try {
    const { rows } = await pool.query('SELECT * FROM postcards WHERE $1 = ANY (films)', [filmTitle]);
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const sortPostCardsByLocationAsc = async () => {
  try {
    const { rows } = await pool.query('SELECT * FROM postcards ORDER BY location ASC');
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const sortPostCardsByLocationDesc = async () => {
  try {
    const { rows } = await pool.query('SELECT * FROM postcards ORDER BY location DESC');
    return rows;
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

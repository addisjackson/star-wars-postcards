const pool = require('./dbConfig');

// Custom queries
const getAllPostCards = async () => {
  const { rows } = await pool.query('SELECT * FROM postcards');
  return rows;
};

const getPostCardById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM postcards WHERE id = $1', [id]);
  return rows[0];
};

const createPostCard = async (postcard) => {
  const { location, price, quantity, synopsis, films, url } = postcard;
  const { rows } = await pool.query(
    'INSERT INTO postcards (location, price, quantity, synopsis, films, url ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [location, price, quantity, synopsis, films, url]
  );
  return rows[0];
};

const updatePostCard = async (id, postcard) => {
  const { location, price, quantity, synopsis, films, url } = postcard;
  const { rows } = await pool.query(
    'UPDATE postcards SET location = $1, price = $2, quantity = $3, synopsis = $4, films = $5, url = $6 WHERE id = $7 RETURNING *',
    [location, price, quantity, synopsis, films, url, id]
  );
  return rows[0];
};

const deletePostCard = async (id) => {
  const { rows } = await pool.query('DELETE FROM postcards WHERE id = $1 RETURNING *', [id]);
  return rows[0];
};

// Additional queries
const filterPostCardsByFilm = async (filmTitle) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM postcards WHERE $1 = ANY (films)',
      [filmTitle]
    );
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const sortPostCardsByLocationAsc = async () => {
  try {
    const result = await pool.query(
      'SELECT * FROM postcards ORDER BY location ASC'
    );
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const sortPostCardsByLocationDesc = async () => {
  try {
    const result = await pool.query(
      'SELECT * FROM postcards ORDER BY location DESC'
    );
    return result.rows;
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
  sortPostCardsByLocationDesc
};
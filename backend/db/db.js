const pool = require('./dbConfig');

// Custom queries
const getAllPostcards = async () => {
  const { rows } = await pool.query('SELECT * FROM postcards');
  return rows;
};

const getPostcardById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM postcards WHERE id = $1', [id]);
  return rows[0];
};

const createPostcard = async (postcard) => {
  const { location, price, quantity, synopsis, film_id, planet_id } = postcard;
  const { rows } = await pool.query(
    'INSERT INTO postcards (location, price, quantity, synopsis, film_id, planet_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [location, price, quantity, synopsis, film_id, planet_id]
  );
  return rows[0];
};

const updatePostcard = async (id, postcard) => {
  const { location, price, quantity, synopsis, film_id, planet_id } = postcard;
  const { rows } = await pool.query(
    'UPDATE postcards SET location = $1, price = $2, quantity = $3, synopsis = $4, film_id = $5, planet_id = $6 WHERE id = $7 RETURNING *',
    [location, price, quantity, synopsis, film_id, planet_id, id]
  );
  return rows[0];
};

const deletePostcard = async (id) => {
  const { rows } = await pool.query('DELETE FROM postcards WHERE id = $1 RETURNING *', [id]);
  return rows[0];
};

// Additional queries

const getPostcardsAfterYear = async (year) => {
  const { rows } = await pool.query(
    'SELECT * FROM postcards WHERE film_id IN (SELECT film_id FROM films WHERE EXTRACT(YEAR FROM release_date) > $1)',
    [year]
  );
  return rows;
};

const getPostcardsBeforeYear = async (year) => {
  const { rows } = await pool.query(
    'SELECT * FROM postcards WHERE film_id IN (SELECT film_id FROM films WHERE EXTRACT(YEAR FROM release_date) < $1)',
    [year]
  );
  return rows;
};

const getPostcardsByCharacterName = async (characterName) => {
  const { rows } = await pool.query(
    'SELECT * FROM postcards WHERE film_id IN (SELECT film_id FROM films WHERE characters @> $1::jsonb)',
    [{ name: characterName }]
  );
  return rows;
};

const getPostcardsByFilm = async (filmTitle) => {
  const { rows } = await pool.query(
    'SELECT * FROM postcards WHERE film_id IN (SELECT film_id FROM films WHERE title = $1)',
    [filmTitle]
  );
  return rows;
};

const sortPostcardsByReleaseYear = async () => {
  const { rows } = await pool.query(
    'SELECT * FROM postcards ORDER BY (SELECT release_date FROM films WHERE films.film_id = postcards.film_id) ASC'
  );
  return rows;
};

const sortPostcardsByPlanetName = async () => {
  const { rows } = await pool.query(
    'SELECT * FROM postcards ORDER BY (SELECT name FROM planets WHERE planets.planet_id = postcards.planet_id) ASC'
  );
  return rows;
};

module.exports = {
  getAllPostcards,
  getPostcardById,
  createPostcard,
  updatePostcard,
  deletePostcard,
  getPostcardsAfterYear,
  getPostcardsBeforeYear,
  getPostcardsByCharacterName,
  getPostcardsByFilm,
  sortPostcardsByReleaseYear,
  sortPostcardsByPlanetName,
};

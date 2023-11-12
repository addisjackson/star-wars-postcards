const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'starwars_dev',
  password: 'postgres',
  port: 5432,
});

client.connect();

// Get all postcards
const getAllPostcards = async () => {
  try {
    const result = await client.query('SELECT * FROM postcards');
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get postcard by ID
const getPostcardById = async (id) => {
  try {
    const result = await client.query('SELECT * FROM postcards WHERE id = $1', [id]);
    return result.rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Create a new postcard
const createPostcard = async (postcard) => {
  const { location, price, quantity, synopsis, film_id, planet_id } = postcard;
  try {
    const result = await client.query(
      'INSERT INTO postcards (location, price, quantity, synopsis, film_id, planet_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [location, price, quantity, synopsis, film_id, planet_id]
    );
    return result.rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Update an existing postcard
const updatePostcard = async (id, postcard) => {
  const { location, price, quantity, synopsis, film_id, planet_id } = postcard;
  try {
    const result = await client.query(
      'UPDATE postcards SET location=$1, price=$2, quantity=$3, synopsis=$4, film_id=$5, planet_id=$6 WHERE id=$7 RETURNING *',
      [location, price, quantity, synopsis, film_id, planet_id, id]
    );

    if (result.rows.length === 0) {
      return null; // Postcard not found
    } else {
      return result.rows[0];
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Delete an existing postcard
const deletePostcard = async (id) => {
  try {
    const result = await client.query('DELETE FROM postcards WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return null; // Postcard not found
    } else {
      return result.rows[0];
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get postcards released after a specific year
const getPostCardsAfterYear = async (year) => {
  try {
    const result = await client.query(
      'SELECT postcards.* FROM postcards INNER JOIN films ON postcards.film_id = films.film_id WHERE films.release_date > $1',
      [`${year}-01-01`]
    );
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get postcards released before a specific year
const getPostCardsBeforeYear = async (year) => {
  try {
    const result = await client.query(
      'SELECT postcards.* FROM postcards INNER JOIN films ON postcards.film_id = films.film_id WHERE films.release_date < $1',
      [`${year}-01-01`]
    );
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get postcards by character name
const getPostCardsByCharacterName = async (characterName) => {
  try {
    const result = await client.query(
      'SELECT postcards.* FROM postcards INNER JOIN films ON postcards.film_id = films.film_id WHERE $1 = ANY (films.characters->\'name\')',
      [characterName]
    );
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get postcards by film
const getPostCardsByFilm = async (filmTitle) => {
  try {
    const result = await client.query(
      'SELECT * FROM postcards WHERE film_id IN (SELECT film_id FROM films WHERE title = $1)',
      [filmTitle]
    );
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const sortPostCardsByReleaseYear = async () => {
  try {
    const result = await client.query(
      'SELECT * FROM postcards ORDER BY (SELECT MIN(release_date) FROM films WHERE films.film_id = postcards.film_id) ASC'
    );
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Sort postcards by planet name in ascending order
const sortPostCardsByPlanetName = async () => {
  try {
    const result = await client.query(
      'SELECT * FROM postcards ORDER BY (SELECT name FROM planets WHERE planets.planet_id = postcards.planet_id) ASC'
    );
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
  getPostCardsAfterYear,
  getPostCardsBeforeYear,
  getPostCardsByCharacterName,
  getPostCardsByFilm,
  sortPostCardsByReleaseYear,
  sortPostCardsByPlanetName,
};

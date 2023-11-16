
const pool = require('../db/dbConfig');
const { checkName, checkPrice, checkQuantity, checkPopulation, checkFilms, checkResidents, checkSpecies, validateUrl, validateJSONKeys } = require('../validations/checkPostCards');


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

const getPostCardByName = async (name) => {
    try {
        const { rows } = await pool.query('SELECT * FROM postcards WHERE name = $1', [name]);
        return rows[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const createPostCard = async (newPostCardData) => {
    try {
        const { image_url, location, price, quantity, synopsis, films, url } = newPostCardData;
        await Promise.all([
            checkName(name),
            checkPrice(price),
            checkQuantity(quantity),
            checkPopulation(population),
            checkFilms(films),
            checkResidents(residents),
            checkSpecies(species),
            validateUrl(url),
            validateJSONKeys({ residents, species, films })
        ]);
        const result = await pool.query(
            'INSERT INTO postcards(image_url, location, price, quantity, synopsis, films, url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [image_url, location, price, quantity, synopsis, films, url]
        );
        return result.rows[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
};


const updatePostCard = async (id, postcard) => {
    try {
        const { image_url, location, price, quantity, synopsis, films, url } = postcard;
        const { rows } = await pool.query(
            'UPDATE postcards SET image_url = $1, location = $2, price = $3, quantity = $4, synopsis = $5, films = $6, url = $7 WHERE id = $8 RETURNING *',
            [image_url, location, price, quantity, synopsis, films, url, id]
        );
        return rows[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const deletePostCard = async (id) => {
    try {
        const { rows } = await pool.query(
            'DELETE FROM postcards WHERE id = $1 RETURNING *',
            [id]
        );
        return rows[0];
    } catch (error) {
        console.error(error);
        throw error;
    }
};


const getSortedPostCards = async (sort) => {
    let query;
    try {
      if (sort === 'asc') {
        query = 'SELECT * FROM postcards ORDER BY location ASC';
      } else if (sort === 'desc') {
        query = 'SELECT * FROM postcards ORDER BY location DESC';
      } else {
        query = 'SELECT * FROM postcards';
      }
    
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      console.error('Error during query execution:', error);
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
 }


 module.exports = {
    getAllPostCards,
    getPostCardById,
    getPostCardByName,
    createPostCard,
    updatePostCard,
    deletePostCard,
    getSortedPostCards,
    filterPostCardsByFilm
 };
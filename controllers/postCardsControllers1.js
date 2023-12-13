const pool = require('../db/dbConfig.js');
const { checkName, checkPrice, checkQuantity, checkPopulation, checkFilms, checkResidents, checkSpecies, validateUrl, validateJSONKeys } = require('../validations/checkPostCards');


const getAllPostCards = async() => {
        try {
            const allPostCards = await pool.one("SELECT * FROM postcards");
            return (allPostCards); // This should log the fetched planets
        } catch (error) {
       return error;
        }
    }


const getPostCard = async (id) => {
  try {

    const onePostCard = await pool.one("SELECT * FROM postcards WHERE id=$1", id);
    return onePostCard;
  } catch (error) {
    return error;
  }
};

const createPostCard = async (postcard) => {
  const { image_url, location, price, quantity, synopsis, films, url } = postcard;
  try {
    const newPostCard = await pool.one(
      "INSERT INTO postcards (image_url, location, price, quantity, synopsis, films, url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [image_url, location, price, quantity, synopsis, films, url]
    );
    return newPostCard;
  } catch (error) {
    return error;
  }
};

const deletePostCard = async (id) => {
  try {
    const deletedPostCard = await pool.one("DELETE FROM postcards WHERE id = $1 RETURNING *", id);
    return deletedPostCard;
  } catch (err) {
    return err;
  }
};

const updatePostCard = async (postcard, id) => {
  const { image_url, location, price, quantity, synopsis, films, url } = postcard;
  try {

    const updatedPostCard = await pool.one("UPDATE postcards SET image_url = $1, location = $2, price = $3, quantity = $4, synopsis = $5, films = $6, url = $7 WHERE id = $8 RETURNING *",
    [image_url, location, price, quantity, synopsis, films, url]);
    return updatedPostCard;
  } catch (err) {
    return err;
  }
}



const getSortedPostCards = async (sort) => {

    let query;
    try {
      if (sort === 'asc') {
        query = 'SELECT * FROM postcards ORDER BY location ASC';
      } else if (sort === 'desc') {
        query = 'SELECT * FROM postcards ORDER BY location DESC';
      } else {
        throw new Error('Invalid sorting parameter');
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
    getPostCard,
    createPostCard,
    updatePostCard,
    deletePostCard,
    getSortedPostCards,
    filterPostCardsByFilm
 };

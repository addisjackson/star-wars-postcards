const pool = require("../db/dbConfig.js");

// async await is the modern way to handle promises
// we tried to show you earlier :'(
const getAllPostCards = async () => {
    const allPostCards = await pool.any("SELECT * FROM postcards");
    return allPostCards;
  };

const getPostCard = async (id) => {
    const onePostCard = await pool.one("SELECT * FROM postcards WHERE id=$1", id);
    return onePostCard;
  };

const createPostCard = async (postcard) => {
  const { image_url, location, price, quantity, synopsis, films, url } = postcard;
    const newPostCard = await pool.one(
      "INSERT INTO postcards (image_url, location, price, quantity, synopsis, films, url]) VALUES ($1, $2, $3, $4), $5, $6, $7 RETURNING *",
      [image_url, location, price, quantity, synopsis, films, url]
    );
    return newPostCard;
  };


const deletePostCard = async (id) => {
    const deletedPostCard = await pool.one("DELETE FROM postcards WHERE id = $1 RETURNING *", id);
    return deletedPostCard;
  }


  const updatePostCard = async (req, res) => {
    try {
      const { id } = req.params;
      const { image_url, location, price, quantity, synopsis, films, url } = req.body;
      const { rows } = await pool.query(
        'UPDATE postcards SET image_url = $1, location = $2, price = $3, quantity = $4, synopsis = $5, films = $6, url = $7 WHERE id = $8 RETURNING *',
        [image_url, location, price, quantity, synopsis, films, url, id]
      );
      if (rows.length === 0) {
        return res.status(404).json({ error: 'PostCard not found' });
      }
      return res.status(200).json(rows[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error!' });
    }
  };


// we will have a bunch of exports, hence the object;
module.exports = {
  getAllPostCards,
  getPostCard,
  createPostCard,
  deletePostCard,
  updatePostCard
};

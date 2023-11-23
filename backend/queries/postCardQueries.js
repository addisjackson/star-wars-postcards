const pool = require("../db/dbConfig.js");

// async await is the modern way to handle promises
// we tried to show you earlier :'(
const getAllPostCards = async () => {
  try {
    const allPostCards = await pool.any("SELECT * FROM postcards");
    return allPostCards;
  } catch (err) {
    return err;
  }
};

const getPostCard = async (id) => {
  try {
    // db one takes a string of SQL command;
    // id=$1 allows us to interpolate our second parameter safely
    // we CAN pass multiple values to one query in this manner
    const onePostCard = await pool.one("SELECT * FROM postcards WHERE id=$1", id);
    return onePostCard;
  } catch (error) {
    // with using db.one() we will not hit our catch block even if we have no
    // record with the corresponding ID - there are MANY ways to handle this
    // db.oneOrNone() is one way - there are also others.
    return error;
  }
};

const createPostCard = async (postcard) => {
  const { image_url, location, price, quantity, synopsis, films, url } = postcard;
  try {
    const newPostCard = await pool.one(
      "INSERT INTO postcards ([image_url, location, price, quantity, synopsis, films, url]) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
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
// We need to pass in the POSTCARD - the information to change
// && the ID of the postcard to access it in the DB
const updatePostCard = async (id, postcard) => {
  const { image_url, location, price, quantity, synopsis, films, url } = postcard;
  const { rows } = await pool.query(
    'UPDATE postcards SET image_url = $1, location = $2, price = $3, quantity = $4, synopsis = $5, films = $6, url = $7 WHERE id = $8 RETURNING *',
    [image_url, location, price, quantity, synopsis, films, url, id]
  );
  return rows[0];
};


// we will have a bunch of exports, hence the object;
module.exports = {
  getAllPostCards,
  getPostCard,
  createPostCard,
  deletePostCard,
  updatePostCard
};

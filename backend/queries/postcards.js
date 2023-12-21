const db = require("../db/dbConfig");

const getAllPostcards = async () => {
  try {
   const allPostcards = await db.any("SELECT * FROM postcards");
   return allPostcards;
  } catch(err) {
    return err
  } 
};

const getPostcard = async (id) => {
    try {
        const onePostcard = await db.one("SELECT * FROM postcards WHERE id=$1", id);
        return onePostcard;
    } catch (error) {
        return error;
    }
}

const createPostcard = async (postcard) => {
    const { image_url, location, price, quantity, synopsis, films, url } = postcard;
    try {
      const newPostcard = await db.one(
        "INSERT INTO postcards (image_url, location, price, quantity, synopsis, films, url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [postcard.image_url, postcard.location, postcard.price, postcard.quantity, postcard.synopsis, postcard.films, postcard.url]
      );
    return newPostcard;
} catch (error) {
    return error;
}

}

const deletePostcard = async (id) => {
try {
    const deletedPostcard = await db.one("DELETE FROM postcards WHERE id = $1 RETURNING *", id)
    return deletedPostcard;

} catch (err) {
 return err
}
};

const updatePostcard = async (postcard, id) => {
    const { image_url, location, price, quantity, synopsis, films, url } = postcard;
    try {
      const updatedPostcard = await db.one(
        'UPDATE postcards SET image_url = $1, location = $2, price = $3, quantity = $4, synopsis = $5, films = $6, url = $7 WHERE id = $8 RETURNING *',
        [image_url, location, price, quantity, synopsis, films, url, id]
      );
    return updatedPostcard;
} catch (err) {
    return err;
}
};




module.exports = { getAllPostcards, getPostcard, createPostcard, deletePostcard, updatePostcard }
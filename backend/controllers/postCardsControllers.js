const express = require("express");
const postcards = express.Router();
const { getAllPostCards, getPostCard, createPostCard, deletePostCard, updatePostCard } = require("../queries/postCardQueries");
const { checkLocation, checkPrice, checkQuantity, validateUrl, checkFilms, validateJSONKeys } = require("../validations/checkPostCards");

// Routes for fetching all postcards and getting a specific postcard by ID

postcards.get("/", async (req, res) => {
  try {
    const allPostCards = await getAllPostCards();
    if (allPostCards[0]) {
      res.status(200).json(allPostCards);
    } else {
      res.status(500).json({ error: "Server error!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error!" });
  }
});

// Route for fetching a specific postcard by ID
postcards.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const postcard = await getPostCard(id);
    if (postcard) {
      res.json(postcard);
    } else {
      res.status(404).json({ error: "PostCard not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error!" });
  }
});

postcards.post('/', checkLocation, checkPrice, checkQuantity, validateUrl, checkFilms, validateJSONKeys, async (req, res) => {
  try {
    const postcard = req.body;

    // Call the createPostCard function to create a new postcard
    const newPostCard = await createPostCard(postcard);

    // Check if the postcard was created successfully
    if (!newPostCard) {
      return res.status(400).json({ error: 'Postcard not created' });
    }

    // Return the newly created postcard
    return res.status(201).json(newPostCard);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error!' });
  }
});

/** 
router.put("/:id", checkLocation, checkPrice, checkQuantity, checkFilms, validateUrl, validateJSONKeys, async (req, res) => {
  try {
    const { id } = req.params;
    const postcard = req.body;

    // Assuming updatePostCard is your controller function to update a postcard
    const updatePostCard = async (id, postcard) => {
      const {image_url, location, price, quantity, synopsis, films, url } = postcard;
      const { rows } = await pool.query(
        'UPDATE postcards SET image_url = $1, ocation = $2, price = $3, quantity = $4, synopsis = $5, films = $6, url = $7 WHERE id = $8 RETURNING *',
        [image_url,location, price, quantity, synopsis, films, url, id]
      );
      return rows[0];
    };

    const updatedPostCard = await updatePostCard(id, postcard);

    if (updatedPostCard) {
      return res.status(200).json(updatedPostCard);
    } else {
      return res.status(404).json({ error: "PostCard not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error!" });
  }
});
*/

postcards.put("/:id",checkLocation, checkPrice, checkQuantity, validateUrl, checkFilms, validateJSONKeys, async (req, res) => {
  try {
    const { id } = "SELECT count(*) FROM postcards" + 1
    const postcardData = req.body;

    const updatedPostcard = await updatePostCard(id, postcardData);

    if (updatedPostcard) {
      return res.status(200).json(updatedPostcard);
    } else {
      return res.status(404).json({ error: "PostCard not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error!" });
  }
});


postcards.delete("/:id", async (req, res) => {
  try { 
    const { id } = req.params;

    const deletedPostcard = await deletePostCard(id);

    if (deletedPostcard) {
      return res.status(200).json(deletedPostcard);
    } else {
      return res.status(404).json({ error: "PostCard not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error!" });
  }
});

module.exports = postcards;

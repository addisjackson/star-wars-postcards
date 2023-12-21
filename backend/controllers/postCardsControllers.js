const express = require("express");
const postcards = express.Router();

const {
  getAllPostcards,
  getPostcard,
  createPostcard,
  deletePostcard,
  updatePostcard
} = require("../queries/postcards.js");
const {  checkLocation, checkPrice, checkQuantity, validateUrl, checkFilms, validateJSONKeys } = require("../validations/checkPostcards.js");

postcards.get("/", async (req, res) => {
  const allPostcards = await getAllPostcards();
  if (allPostcards[0]) {
    res.status(200).json(allPostcards);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

postcards.get("/:id", async (req, res) => {
  const { id } = req.params;
  const postcard = await getPostcard(id);
  if (postcard) {
    res.json(postcard);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

postcards.post("/", [ checkLocation, checkPrice, checkQuantity, validateUrl, checkFilms, validateJSONKeys], async (req, res) => {
  try {
    const postcard = await createPostcard(req.body);
    res.json(postcard);
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


postcards.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPostcard = await deletePostcard(id);
  // if our response has an ID we are good to go!
  // an error will NOT have an id
  if (deletedPostcard.id) {
    res.status(200).json(deletedPostcard)
  } else {
    res.status(404).json("Postcard not found!");
  }
});

postcards.put("/:id",  checkName, checkPopulation, checkQuantity, validateUrl, checkFilms, validateJSONKeys, async (req, res) => {
  const { id } = req.params;
  const updatedPostcard = await updatePostcard(req.body, id);
  if (updatedPostcard.id) {
    res.status(200).json(updatedPostcard);
  } else {
    res.status(404).json({error: "Postcard not updated."});
  }
})

module.exports = postcards;
// EXPORT our Postcards Router

const express = require("express");
const postcards = express.Router();
const { 
  getAllPostcards, 
  getPostcard, 
  createPostcard, 
  updatePostcard, 
  deletePostcard,
  filterPostcardsByFilm, 
  sortPostcardsByLocationAsc, 
  sortPostcardsByLocationDesc
} = require("../queries/postcardQueries");
const { 
  checkLocation, 
  checkPrice, 
  checkQuantity, 
  validateUrl,
  validateJSONKeys, 
  checkFilms 
} = require("../validations/checkPostcards.js");
const errorHandler = require("../middlewares/errorHandler.js");

// Error handling middleware
postcards.use(errorHandler);

// Route for fetching all postcards with pagination and filters
postcards.get("/", async (req, res, next) => {
  try {
    const { page = 1, limit = 10, film, sortBy } = req.query;
    const offset = (page - 1) * limit;
    let postcardsData;

    if (film) {
      postcardsData = await filterPostcardsByFilm(film, offset, limit);
    } else if (sortBy === "locationAsc") {
      postcardsData = await sortPostcardsByLocationAsc(offset, limit);
    } else if (sortBy === "locationDesc") {
      postcardsData = await sortPostcardsByLocationDesc(offset, limit);
    } else {
      postcardsData = await getAllPostcards(offset, limit);
    }

    if (postcardsData) {
      res.status(200).json(postcardsData);
    } else {
      res.status(404).json({ error: "No postcards found" });
    }
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
});

// Route for fetching a specific postcard by ID
postcards.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const postcard = await getPostcard(id);
    if (postcard) {
      res.json(postcard);
    } else {
      res.status(404).json({ error: "Postcard not found" });
    }
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
});

// Route for creating a new postcard
postcards.post('/', checkLocation, checkPrice, checkQuantity, validateUrl, checkFilms, validateJSONKeys, async (req, res, next) => {
  try {
    const newPostcard = await createPostcard(req.body);
    if (!newPostcard) {
      return res.status(400).json({ error: 'Postcard not created' });
    }
    return res.status(201).json(newPostcard);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
});

// Route for updating a postcard by ID
postcards.put("/:id", checkLocation, checkPrice, checkQuantity, validateUrl, checkFilms, validateJSONKeys, async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedPostcard = await updatePostcard(id, req.body);
    if (updatedPostcard) {
      res.json(updatedPostcard);
    } else {
      res.status(404).json({ error: "Postcard not found" });
    }
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
});

// Route for deleting a postcard by ID
postcards.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPostcard = await deletePostcard(id);
    if (deletedPostcard) {
      res.json({ message: "Postcard deleted successfully" });
    } else {
      res.status(404).json({ error: "Postcard not found" });
    }
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
});

module.exports = postcards;

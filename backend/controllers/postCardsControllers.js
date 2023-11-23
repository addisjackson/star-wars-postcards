// Routes for fetching all postcards with pagination
postcards.get("/", async (req, res) => {
  try {
    const { page, limit } = req.query;
    const offset = (page - 1) * limit;
    
    const allPostCards = await getAllPostCards(offset, limit);
    
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

// Route for creating a new postcard
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

// Route for updating a postcard by ID
postcards.put("/:id", checkLocation, checkPrice, checkQuantity, validateUrl, checkFilms, validateJSONKeys, async (req, res) => {
  try {
    const { id } = req.params;
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

// Route for deleting a postcard by ID
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

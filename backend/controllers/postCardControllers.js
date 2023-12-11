const express = require("express");
const {
	getAllPostCards,
	getPostCardById,
	createPostCard,
	updatePostCard,
	deletePostCard,
} = require("../queries/postcards.js");

const postcards = express.Router();

postcards.get("/:id", async (req, res) => {
	const { id } = req.params;
	const postcard = await getPostCardById(id);
	if (postcard) {
		res.json(postcard);
	} else {
		res.status(404).json({ error: "Not Found!" });
	}
});
postcards.get("/", async (req, res) => {
	const allPostcards = await getAllPostcards();
	if (allPostcards[0]) {
		res.status(200).json(allPostcards);
	} else {
		res.status(500).json({
			success: false,
			data: { error: "Server Error!" },
		});
	}
});

postcards.post("/", async (req, res) => {
	try {
		const createdPostcard = await createPostCard(req.body);
		res.json(createdPostcard);
	} catch (error) {
		res.status(400).json({ error: "I'm Sorry. An error has occurred!" });
	}
});

postcards.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deletedPostcard = await deletePostCard(id);
		if (deletedPostcard) {
			res
				.status(200)
				.json({ success: true, payload: { data: deletedPostcard } });
		} else {
			res.status(404).json("Superhero does not exist!");
		}
	} catch (error) {
		res.send(error);
	}
});

postcards.put("/:id", async (req, res) => {
	const { id } = req.params;
	const updatedPostcard = await updatePostcard(id, req.body);
	if (updatedPostcard.id) {
		res.status(200).json(updatedPostcard);
	} else res.status(404).json("No such postcards was found with that id!");
});

module.exports = postcards;

const express = require('express');
const router = express.Router();

const postCardController = require('../controllers/postCardController');

router.get('/', postCardController.getAllPostCards);
router.get('/:id', postCardController.getPostCardById);
router.post('/', postCardController.createPostCard);
router.put('/:id', postCardController.updatePostCard);
router.delete('/:id', postCardController.deletePostCard);
router.get('/sort/asc', postCardController.sortPostCardsByLocationAsc);
router.get('/sort/desc', postCardController.sortPostCardsByLocationDesc);
router.get('/filter/film/:film', postCardController.filterPostCardsByFilm);

module.exports = router;

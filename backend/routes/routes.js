const express = require('express');
const router = express.Router();
const postCardControllers = require('../controllers/postCardControllers'); // import postCardC

router.get('/postcards', postCardControllers.getAllPostCards);
router.get('/postcards/:id', postCardControllers.getPostCardById);
router.post('/postcards', postCardControllers.createPostCard);
router.put('/postcards/:id', postCardControllers.updatePostCard);
router.delete('/postcards/:id', postCardControllers.deletePostCard);



module.exports = router;
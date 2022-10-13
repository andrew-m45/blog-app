const express = require('express');

const { getPosts, getSinglePost, deletePost, getRecommendedPosts, createPost, updatePost } = require('../controllers/postsController');
// express router
const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getSinglePost);
router.get('/category/:category', getRecommendedPosts);
router.delete('/:id', deletePost);
router.post('/', createPost);
router.put('/:id', updatePost);

module.exports = router;
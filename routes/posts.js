const { getAllPost, getSinglePost } = require('../controllers/postsController');

const express = require('express');

// express router
const router = express.Router();

router.get('/', getAllPost);
router.get('/:id', getSinglePost);

// router.post('/',);
// router.delete('/:id',);
// router.put('/:id',);

module.exports = router;
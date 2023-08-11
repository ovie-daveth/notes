const express = require('express');
const { createPost, seePosts, updatePost, deletePost, seePost, seeMyPost } = require('../controller/noteController');
const tokenaccess = require('../middlewares/tokenaccess');

const router = express.Router();


router.route('/').post(tokenaccess, createPost).get(seePosts)
router.route('/mypost').get(tokenaccess, seeMyPost)
router.route('/:id').put(tokenaccess, updatePost).delete(tokenaccess, deletePost).get(seePost);




module.exports = router
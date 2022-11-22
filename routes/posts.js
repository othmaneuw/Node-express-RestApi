const express = require("express");
const router = express.Router();
const {getPosts,getOnePost,editPost,deletePost,addPost} = require("../controllers/posts");

//Getting all the posts
router.get('/',getPosts)
// Submit a post
router.post('/',addPost);
// Get a specific id
router.get('/:id',getOnePost)
//Update a post
router.put('/:id',editPost)
//Delete a post
router.route('/:postId').delete(deletePost);


module.exports = router;
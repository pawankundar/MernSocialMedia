const express = require("express");
const { createPost, updatePost, timeline, deletePost, like, getApost, getUserPosts } = require("../controller/posts");
const router = express.Router();

router.get("/timeline/:id", timeline); 
router.get("/:id",getApost)
router.get("/profile/:username",getUserPosts)
router.post("/create", createPost);
router.put("/:id", updatePost);
router.delete("/:id",deletePost)
router.put("/:id/like",like)

module.exports = router;

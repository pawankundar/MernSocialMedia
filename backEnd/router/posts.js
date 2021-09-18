const express = require("express");
const { createPost, updatePost, getPost, deletePost } = require("../controller/posts");
const router = express.Router();

router.get("/", getPost); 
router.post("/create", createPost);
router.put("/:id", updatePost);
router.delete("/:id",deletePost)

module.exports = router;

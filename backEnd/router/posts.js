const express = require("express");
const { createPost, updatePost, timeline, deletePost, like, getApost } = require("../controller/posts");
const router = express.Router();

router.get("/timeline/all", timeline); 
router.get("/:id",getApost)
router.post("/create", createPost);
router.put("/:id", updatePost);
router.delete("/:id",deletePost)
router.put("/:id/like",like)

module.exports = router;

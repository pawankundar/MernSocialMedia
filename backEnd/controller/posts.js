const Post = require("../model/post");

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  post.save((err, savedPost) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json(savedPost);
  });
};

exports.updatePost = (req, res) => {
  Post.findById(req.params.id)
    .then((foundPost, err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      if (foundPost.userId === req.body.userId) {
        Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
          .then((updatePost, err) => {
            if (err) {
              return res.status(400).json({
                error: err,
              });
            }
            return res.status(200).json({
              updatedPost: updatePost,
            });
          })
          .catch((err) => {
            return res.status(400).json({
              unableToupdate: err,
            });
          });
      } else {
        return res.status(403).json({
          error: "You are not authorized to update this post",
        });
      }
    })
    .catch((err) => {
      return res.status(404).json({
        error: "Post not found",
      });
    });
};

exports.getPost = (req, res) => {
  Post.find().then((allPost, err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json(allPost);
  });
};

exports.deletePost = (req, res) => {
  Post.findById(req.params.id)
    .then((foundPost, err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      if (foundPost.userId === req.body.userId) {
        foundPost
          .delete()
          .then((deletedPost, err) => {
            if (err) {
              return res.status(400).json({
                error: err,
              });
            }
            return res.status(200).json({
              deletedPost: deletedPost,
            });
          })
          .catch((err) => {
            return res.status(400).json({
              errorInDelete: err,
            });
          });
      } else {
        return res.status(403).json({
          error: "unauthorized to delete the post",
        });
      }
    })
    .catch((err) => {
      return res.status(404).json({
        error: "Post not found",
      });
    });
};

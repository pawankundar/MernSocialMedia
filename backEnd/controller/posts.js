const Post = require("../model/post");
const User = require("../model/user");

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

exports.timeline = async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.id);
    const userPost = await Post.find({ userId: currentUser._id });
    const friendsPost = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    return res.status(200).json(userPost.concat(...friendsPost));
  } catch {
    return res.status(400).json({
      error: "error in timeline",
    });
  }
};

exports.getApost = (req, res) => {
  Post.findById(req.params.id)
    .then((foundPost, err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json(foundPost);
    })
    .catch(() => {
      return res.status(404).json({
        error: "Post not found",
      });
    });
};

exports.getUserPosts = (req, res) => {
  User.findOne({ username: req.params.username })
    .then((foundUser, err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      Post.find({ userId: foundUser._id })
        .then((Posts, err) => {
          if (err) {
            return res.status(400).json({
              error: err,
            });
          }
          return res.status(200).json(Posts);
        })
        .catch(() => {
          return res.status(404).json({
            error: "Post of this user not found",
          });
        });
    })
    .catch(() => {
      return res.status(400).json({
        error: "user not found",
      });
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

exports.like = (req, res) => {
  Post.findById(req.params.id)
    .then(async (foundPost, err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      if (!foundPost.likes.includes(req.body.userId)) {
        await foundPost.updateOne({ $push: { likes: req.body.userId } });
        return res.status(200).json({
          message: "post liked",
        });
      } else {
        await foundPost.updateOne({ $pull: { likes: req.body.userId } });
        return res.status(200).json({
          message: "post disliked",
        });
      }
    })
    .catch((err) => {
      return res.status(404).json({
        error: "Post not found",
      });
    });
};

const bcrypt = require("bcrypt");
const User = require("../model/user");

exports.getAllUsers = (req, res) => {
  User.find((err, allUsers) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json(allUsers);
  });
};

exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user, err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      const { password, createdAt, updatedAt, ...others } = user._doc;
      return res.status(200).json(others);
    })
    .catch((err) => {
      return res.status(404).json({
        error: "user not found",
      });
    });
};

exports.updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(11);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .then((updatedUser, err) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        updatedUser.password = undefined;
        return res.status(200).json(updatedUser);
      })
      .catch((err) => {
        return res.status(400).json({
          error: "user not found",
        });
      });
  } else {
    return res.status(400).json({
      error: "You can only update your account",
    });
  }
};

exports.deleteUser = async (req, res) => {
  if (req.params.id === req.body.userId) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(11);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    User.findByIdAndDelete(req.params.id)
      .then((deletedUser, err) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          message: "user deleted",
        });
      })
      .catch((err) => {
        return res.status(404).json({
          error: "user not found",
        });
      });
  } else {
    return res.status(400).json({
      error: "you can only delete your account",
    });
  }
};

exports.follow = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: currentUser._id } });
        await currentUser.updateOne({ $push: { following: user._id } });
        return res.status(200).json("user followed");
      } else {
        res.status(400).json({
          error: "you already follow this user",
        });
      }
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  } else {
    return res.status(400).json({
      error: "you cannot follow yourself",
    });
  }
};

exports.unfollow = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(currentUser._id)) {
        await user.updateOne({ $pull: { followers: currentUser._id } });
        await currentUser.updateOne({ $pull: { following: user._id } });
        return res.status(200).json("user unfollowed");
      } else {
        res.status(400).json({
          error: "you do not follow this user",
        });
      }
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  } else {
    return res.status(400).json({
      error: "you cannot unfollow yourself",
    });
  }
};

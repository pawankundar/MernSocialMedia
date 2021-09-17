const bcrypt = require("bcrypt");
const User = require("../model/user");

exports.register = async (req, res) => {
  const salt = await bcrypt.genSalt(11);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = await new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  await user.save((err, savedUser) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    savedUser.password = undefined;
    res.send(savedUser);
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username }, (err, returnedUser) => {
    if (err || !returnedUser) {
      return res.status(400).json({
        error: "Wrong credentails",
      });
    }
    bcrypt
      .compare(password, returnedUser.password)
      .then((result) => {
        if (!result) {
          return res.status(400).json({
            error: "wrong credentials",
          });
        }
        returnedUser.password = undefined;
        return res.status(200).json(returnedUser);
      })
      .catch((err) => {
        return res.status(400).json({
          err: err,
        });
      });
  });
};

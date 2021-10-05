const Conversation = require("../model/conversation");

exports.getConversation = (req, res) => {
  Conversation.find({
    members: { $in: [req.params.userId] },
  })
    .then((foundConversation, err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json(foundConversation);
    })
    .catch(() => {
      return res.status(404).json({
        error: "Conversation not found",
      });
    });
};

exports.newConversation = async (req, res) => {
  const conv = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  conv.save((err, savedConv) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json(savedConv);
  });
};

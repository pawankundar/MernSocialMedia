const Messages = require("../model/message");
exports.createMessage = async (req, res) => {
  const msg = new Messages(req.body);
  await msg.save((err, savedMessage) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json(savedMessage);
  });
};

exports.getMessage = async (req,res)=>{
    Messages.find({
        conversationId : req.params.conversationId
    }).then((foundMessage,err)=>{
        if(err){
            return res.status(400).json({
                error : err
            })
        }
        return res.status(200).json(foundMessage)
    }).catch(()=>{
        return res.status(404).json({
            error : "message not found"
        })
    })
}

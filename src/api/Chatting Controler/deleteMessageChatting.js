const Message = require("../../model/Message/Message Model");

const deleteMessageChatting = async (req, res) => {
  try {
    const id = req.params._id;
    const result = await Message.deleteMany({
      conversationId: id,
    });
    if (result?.deletedCount > 0) {
      res.send({ success: true });
    }
  } catch (error) {
    res.status(500).send(error?.message);
  }
};
module.exports = deleteMessageChatting;

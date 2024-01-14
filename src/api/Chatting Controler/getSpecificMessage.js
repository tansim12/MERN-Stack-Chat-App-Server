const Conversation = require("../../model/Conversation Model/ConversationModel");
const Message = require("../../model/Message/Message Model");

const getSpecificMessage = async (req, res) => {
  try {
    const id = req.params._id;
    const messages = await Message.find({ conversationId: id });
    const { participant } = await Conversation.findById(id);
    res.send({ message: messages, participant });
  } catch (error) {
    res.status(500).send(error?.message);
  }
};
module.exports = getSpecificMessage;

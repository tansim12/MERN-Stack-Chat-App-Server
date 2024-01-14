const Conversation = require("../../model/Conversation Model/ConversationModel");

const getConversationsData = async (req, res) => {
  try {
    const creatorEmail = req.query.creatorEmail;

    const result = await Conversation.find({
      $or: [
        { "creator.email": creatorEmail },
        { "participant.email": creatorEmail },
      ],
    }).sort({createdAt:-1});

    if (result) {
      res.send(result);
    }
  } catch (error) {
    res.status(500).send(error?.message);
  }
};
module.exports = getConversationsData;

const Conversation = require("../../model/Conversation Model/ConversationModel");

const postConversationData = async (req, res) => {
  try {
    const info = req.body;
    const creatorId = req.body?.creator?.id;
    const participantId = req.body?.participant?.id;

    const isCreate = await Conversation.find({
      $and: [{ "creator.id": creatorId }, { "participant.id": participantId }],
    });
    
    if (isCreate && isCreate?.length) {
        
      return res.send({ success: true });
    } else {
   
      const newInfo = new Conversation(info);
      const result = await newInfo.save();
      if (result) {
        res.send({ success: true });
      }
    }
  } catch (error) {
    res.status(500).send(error?.message);
  }
};
module.exports = postConversationData;

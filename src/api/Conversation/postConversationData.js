const Conversation = require("../../model/Conversation Model/ConversationModel");

const postConversationData = async (req, res) => {
  try {
    const info = req.body;
    const creatorEmail = req.body?.creator?.email;
    const participantEmail = req.body?.participant?.email;
// validate isCreate there conversation 
    const isCreate = await Conversation.find({
        $or: [
          {
            $and: [
              { "creator.email": creatorEmail },
              { "participant.email": participantEmail },
            ]
          },
          {
            $and: [
              { "creator.email": participantEmail },
              { "participant.email": creatorEmail },
            ]
          }
        ]
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

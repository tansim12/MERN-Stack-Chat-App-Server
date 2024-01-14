const Conversation = require("../../model/Conversation Model/ConversationModel");

const getConversationsData =async(req, res)=>{
try {
    const creatorId =req.query.creator
   
    
    const result = await Conversation.find({
        $or:[
            {"creator.id":creatorId},
            {"participant.id":creatorId}
        ]
    })
    
    if (result) {
        res.send(result)
    }

} catch (error) {
    res.status(500).send(error?.message)
}

}
module.exports= getConversationsData
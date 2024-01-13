const Conversation = require("../../model/Conversation Model/ConversationModel")

const postConversationData =async(req, res)=>{
try {
    const info = req.body
    const newInfo =new Conversation(info)
    const result = await newInfo.save()
    if (result) {
        res.send({success:true})
    }
} catch (error) {
    res.status(500).send(error?.message)
}

}
module.exports = postConversationData
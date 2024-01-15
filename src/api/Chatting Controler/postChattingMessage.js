const Message = require("../../model/Message/Message Model");

const postChattingMessage = async (req, res) => {
  try {
    const info = req.body;
    const newMessage = new Message(info);
    const result = await newMessage.save();
    // emit socket io
    // global.io.emit("new_message",{
    //   // ...info
    //   message:"hello"
    // })
    res.send(result);
  } catch (error) {
    res.status(500).send(error?.message);
  }
};
module.exports = postChattingMessage;

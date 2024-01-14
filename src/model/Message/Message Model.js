const { model, Schema, default: mongoose } = require("mongoose");

const MessageSchema = new Schema(
  {
    text: {
      type: String,
    },
    attachment: [
      {
        type: String,
      },
    ],
    conversationId: {
        type: mongoose.Types.ObjectId,
        // default: mongoose.Types.ObjectId,
      },
    sender: {
      
      name: String,
      image: String,
      email: String,
    },
    receiver: {
      
      name: String,
      image: String,
      email: String,
    },
    lastUpdate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
const Message = new model("Message", MessageSchema);
module.exports = Message;

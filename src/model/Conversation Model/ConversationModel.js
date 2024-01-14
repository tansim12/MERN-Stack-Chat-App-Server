const { Schema, model, default: mongoose } = require("mongoose");

const ConversationSchema = new Schema(
  {
    creator: {
      id: mongoose.Types.ObjectId,
      name: String,
      image: String,
      email:String
    },
    participant: {
      id: mongoose.Types.ObjectId,
      name: String,
      image: String,
      email:String
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
const Conversation = model("Conversation", ConversationSchema)
module.exports = Conversation

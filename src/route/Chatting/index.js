const express = require('express');
const getSpecificMessage = require('../../api/Chatting Controler/getSpecificMessage');
const postChattingMessage = require('../../api/Chatting Controler/postChattingMessage');
const deleteMessageChatting = require('../../api/Chatting Controler/deleteMessageChatting');
const router = express.Router()
router.get("/message/:_id", getSpecificMessage)
router.delete("/message/:_id", deleteMessageChatting)
router.post("/message", postChattingMessage)

module.exports = router







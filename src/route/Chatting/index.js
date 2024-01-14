const express = require('express');
const getSpecificMessage = require('../../api/Chatting Controler/getSpecificMessage');
const postChattingMessage = require('../../api/Chatting Controler/postChattingMessage');
const router = express.Router()
router.get("/message/:_id", getSpecificMessage)
router.post("/message", postChattingMessage)

module.exports = router







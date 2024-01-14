const express = require('express');
const postConversationData = require('../../api/Conversation/postConversationData');
const getConversationsData = require('../../api/Conversation/getConversationsData');
const router = express.Router()

router.post("/conversation", postConversationData)
router.get("/conversation", getConversationsData)

module.exports = router



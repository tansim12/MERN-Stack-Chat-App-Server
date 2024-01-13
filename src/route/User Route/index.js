const express = require('express');
const userPost = require('../../api/User Contoler/postUser');
const getSearchUser = require('../../api/User Contoler/getSearchUser');

const router = express.Router()

router.post("/users" , userPost)
router.get("/searchUser" , getSearchUser)

module.exports=router



const express = require('express');
const userPost = require('../../api/User Contoler/postUser');
const getSearchUser = require('../../api/User Contoler/getSearchUser');
const getFindOneUserData = require('../../api/User Contoler/getFindOneUserData');

const router = express.Router()

router.post("/users" , userPost)
router.get("/searchUser" , getSearchUser)
router.get("/findOneUser" , getFindOneUserData)

module.exports=router



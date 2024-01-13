const User = require("../../model/User Model/Users")

const getFindOneUserData = async(req , res)=>{
try {
    const email = req.query?.email
    let queryObj = {}
    if (email) {
        queryObj.email = email
    }
    const result = await User.findOne(queryObj)
    res.send(result)
} catch (error) {
    res.status(500).send(error?.message)
}

}
module.exports= getFindOneUserData
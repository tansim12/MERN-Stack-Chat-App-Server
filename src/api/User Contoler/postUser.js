const User = require("../../model/User Model/Users");



const userPost = async (req, res) => {
  try {
    const info = req.body;
    const newUser = new User(info);
    const isUser = await User.findOne({ email: info?.email });
    if (isUser) {
      return res.send({ success: true });
    }
    const result = await newUser.save();
    if (result) {
      res.send({ success: true });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = userPost;

const User = require("../../model/User Model/Users");

const getSearchUser = async (req, res) => {
  try {
    const search = req.query?.search;

    let searchObj = {};
    if (search) {
      // Fix the variable name here from queryObj to searchObj
      searchObj.name = { $regex: search, $options: "i" };
    }

    const result = await User.find(searchObj);
    res.send(result);
  } catch (error) {
    // Send the status code and error message
    res.status(500).send(error.message);
  }
};

module.exports = getSearchUser;

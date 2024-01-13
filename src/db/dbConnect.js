const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.qmivnkm.mongodb.net/?retryWrites=true&w=majority`;

const dbConnect = async (req, res) => {
  await mongoose.connect(uri, { dbName: "chatapp" }).then(() => {
    console.log("Db Connect succuss");
  });
};

module.exports = dbConnect;

const express = require('express');
const normalMiddleWare = require('./middleware/Normal Middle Ware/normalMiddleWare');
const globalErrorHandler = require('./utils/GlobalErrorHandler/globalErrorHandler');
require("dotenv").config()
const app = express()
const userRoute = require("../src/route/User Route/index")
const conversationRouter = require("../src/route/Conversation/index")


// normalMiddleWare 
normalMiddleWare(app)

// user route 
app.use(userRoute)

// conversation route 
app.use(conversationRouter)

app.get("/health", (req, res) => {
    res.send("chat app running ");
  });

app.all("*", (req, res, next) => {
    const error = new Error(`Can't find ${req.url} on the server`);
    error.status = 404;
    next(error);
  });
  
  // error handling middleware
  app.use(globalErrorHandler);
  

  module.exports=app






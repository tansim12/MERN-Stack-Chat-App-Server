const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const normalMiddleWare = (app) => {
  app.use(
    cors({
      origin: [
        "https://funny-lily-53526d.netlify.app",
        "http://localhost:5173",
        "http://localhost:5174",
      ],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
};

module.exports = normalMiddleWare;

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 8000;

const main = (req, res) => {
  res.status(200).json({ message: "ah ok" });
};
express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(cors())
  .use(morgan("tiny"))
  .use(express.static("./client/build"))
  .use(bodyParser.json())
  .use(bodyParser.text())
  .use(express.urlencoded({ extended: false }))
  //Routes
  .get("/", main)

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));

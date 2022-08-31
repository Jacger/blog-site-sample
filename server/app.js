const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
// const logger = require("morgan");

const app = express();

//connect database
const connectDatabase = require('./configs/mongoDb/database');
connectDatabase();

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app;

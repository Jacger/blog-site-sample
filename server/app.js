const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const dashboardRouter = require('./routes/dashboard');
const express = require("express");
const path = require("path");
// const cookieParser = require("cookie-parser");
// const logger = require("morgan");

const app = express();

//connect database
require('./configs/mongoDb/database');

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use('/', dashboardRouter);
app.use('/users', usersRouter);
app.use('/users/:userId', postsRouter);

module.exports = app;

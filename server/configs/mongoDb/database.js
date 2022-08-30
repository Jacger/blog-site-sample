const mongoose = require("mongoose");

const userName = process.env.MONGO_ROOT_USERNAME || "root";
const password = process.env.MONGO_ROOT_PASSWORD || "password";
const db = process.env.MONGO_ROOT_DB || "db";
const port = process.env.MONGO_ROOT_PORT || "27017";
const mongoUrl = `mongodb://${userName}:${password}@${db}:${port}`;

async function connect() {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connect successfully");
  } catch (error) {
    console.log("Connect failed");
  }
}

module.exports = connect;

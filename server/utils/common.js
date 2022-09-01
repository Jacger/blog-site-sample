require('dotenv').config();

const userName = process.env.MONGO_ROOT_USERNAME || "root";
const password = process.env.MONGO_ROOT_PASSWORD || "password";
const host = process.env.MONGO_ROOT_DB || "db";
const port = process.env.MONGO_ROOT_PORT || "27017";
const db = process.env.MONGO_DB || 'development';
const authDb = process.env.MONGO_AUTH_DATABASE || 'admin';
const mongoUrl = `mongodb://${userName}:${password}@${host}:${port}/${db}?authSource=${authDb}`;

module.exports = { mongoUrl };

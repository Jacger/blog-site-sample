const mongoose = require('mongoose');
const { mongoUrl } = require('../../utils/common');

console.log(`Connect string: ${mongoUrl}`);
//Set up default mongoose connection
mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
const db = mongoose.connection;

db.on('connected', console.log.bind(console, 'MongoDB connected'));

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

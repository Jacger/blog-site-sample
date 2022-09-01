const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  author: {type: mongoose.Types.ObjectId, ref: "User"},
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Post', PostSchema);

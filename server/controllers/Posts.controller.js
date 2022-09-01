const Post = require('../models/Post');

exports.index = (req, res) => {
  res.send('NOT IMPLEMENTED: Post list GET');
};

exports.new = (req, res) => {
  res.send('NOT IMPLEMENTED: User list GET');
};

exports.show = (req, res) => {
  res.send(`NOT IMPLEMENTED: Post detail: ${req.params.id} GET`);
};

exports.create = (req, res) => {
  res.send('NOT IMPLEMENTED: Post create POST');
};

exports.edit = (req, res) => {
  res.send('NOT IMPLEMENTED: Post edit GET');
};

exports.update = (req, res) => {
  res.send('NOT IMPLEMENTED: Post update PUT/PATCH');
};

exports.delete = (req, res) => {
  res.send('NOT IMPLEMENTED: Post delete DELETE');
};

const User = require('../models/User');

exports.index = (req, res) => {
  res.send('NOT IMPLEMENTED: User list GET');
};

exports.new = (req, res) => {
  res.send('NOT IMPLEMENTED: User list GET');
};

exports.show = (req, res) => {
  res.send(`NOT IMPLEMENTED: User detail: ${req.params.id} GET`);
};

exports.create = (req, res) => {
  res.send('NOT IMPLEMENTED: User create POST');
};

exports.edit = (req, res) => {
  res.send('NOT IMPLEMENTED: User edit GET');
};

exports.update = (req, res) => {
  res.send('NOT IMPLEMENTED: User update PUT/PATCH');
};

exports.delete = (req, res) => {
  res.send('NOT IMPLEMENTED: User delete DELETE');
};

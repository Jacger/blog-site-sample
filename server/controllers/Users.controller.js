const {indexData, showData, createData, editData, updateData} = require('../data/fake/users');

exports.index = (req, res) => {
  res.status(200).json(indexData);
};

exports.show = (req, res) => {
  res.status(200).json(showData);
};

exports.create = (req, res) => {
  res.status(200).json(createData);
};

exports.edit = (req, res) => {
  res.status(200).json(editData);
};

exports.update = (req, res) => {
  res.status(200).json(updateData);
};

exports.delete = (req, res) => {
  res.status(200).json("User has been deleted");
};

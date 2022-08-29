const User = require("../models/User.model");
const CryptoJS = require("crypto-js");
class UserController {
  getUsers = async (req, res, next) => {
    const query = req.query.new;
    try {
      const users = query
        ? await User.find({}, "username createdAt email role")
            .sort({ _id: -1 })
            .limit(1)
        : await User.find({}, "username createdAt email role");
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  getUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  addUser = async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
      role: req.body.role,
    });

    try {
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  editUser = async (req, res) => {
    console.log(req.body);
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  deleteUser = async (req, res) => {
    try {
      await User.deleteOne({ _id: req.params.id });
      res.status(200).json("User has been deleted");
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  };
}

module.exports = new UserController();

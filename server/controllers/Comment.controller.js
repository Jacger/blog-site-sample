const Comment = require("../models/Comment.model");
const Product = require("../models/Product.model");
class CommentController {
  addComment = async (req, res) => {
    const comment = new Comment({
      username: req.body.username,
      content: req.body.content,
      created_at: req.body.created_at,
      product: req.body.product,
    });
    try {
      const product = await Product.findById(req.body.product);
      await product.save();
      await comment.save();
      return res.status(201).json({ _id: comment._id });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  };

  addReply = async (req, res) => {
    try {
      await Comment.updateOne(
        { _id: req.query.id },
        {
          $push: {
            replies: {
              username: req.body.username,
              content: req.body.content,
              created_at: req.body.created_at,
            },
          },
        }
      );
      return res.status(200).json({ msg: "Bình luận thành công" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  };

  getComments = async (req, res) => {
    try {
      const comments = await Comment.find({ product: req.query.product }).sort({
        $natural: -1,
      });
      return res.status(200).json(comments);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  };
}

module.exports = new CommentController();

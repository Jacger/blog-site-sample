const express = require('express');
const router = express.Router();
const postsController = require('../controllers/Posts.controller');

router.get('/posts', postsController.index);
router.get('/posts/:id', postsController.show);
router.post('/posts', postsController.create);
router.get('/posts/:id', postsController.edit);
router.put('/posts/:id', postsController.update);
router.patch('/posts/:id', postsController.update);
router.delete('/posts/:id', postsController.delete);

module.exports = router;

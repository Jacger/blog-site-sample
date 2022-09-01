const express = require('express');
const router = express.Router();
const usersController = require('../controllers/Users.controller');

router.get('/', usersController.index);
router.get('/new', usersController.new);
router.get(':id', usersController.show);
router.post('/', usersController.create);
router.get(':id', usersController.edit);
router.put(':id', usersController.update);
router.patch(':id', usersController.update);
router.delete(':id', usersController.delete);

module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/Auth.controller');

router.post('/', authController.callback);
router.delete('/logout', authController.logout);

module.exports = router;

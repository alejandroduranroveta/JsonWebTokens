const express = require('express');
const verifyUser = require('../Middleware/verifyUser.js')
const { login } = require('../controllers/usersControllers');

const router = express.Router();

router.post('/',verifyUser, login);

module.exports = router;
const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const ShortUrlController = require('../controller/urlController');
router.post('/',ShortUrlController.postUrl);
module.exports = router;
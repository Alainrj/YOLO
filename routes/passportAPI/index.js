const express = require('express');
const router = express.Router();

router.use('/', require('./users'));

module.exports = router;
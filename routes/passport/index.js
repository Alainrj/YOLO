const express = require('express');
const router = express.Router();

router.use('./passportAPI',require('././passportAPI'));

module.exports = router;
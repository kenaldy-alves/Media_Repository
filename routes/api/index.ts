const uploadMedia = require('./upload-media');
const router = require('express').Router();

router.use('/uploadMedia', uploadMedia);

module.exports = router;
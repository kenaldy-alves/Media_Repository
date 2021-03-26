const _routes = require('express').Router({ mergeParams: true });
const upload  = require('../../../controllers/upload-media/upload');

_routes.post('/', upload);

module.exports = _routes;
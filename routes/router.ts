const api = require('./api');
const routes = require('express').Router();

routes.use('/api', api);

routes.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));

module.exports = routes;  
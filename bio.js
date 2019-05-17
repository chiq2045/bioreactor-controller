require('dotenv').config();

const Koa = require('koa');
const serve = require('koa-static');

const bio = new Koa();

// Connect to database
require('./api/db.js');

bio.use(serve(`${__dirname}/dist`));

bio.listen(1338);

module.exports = bio;

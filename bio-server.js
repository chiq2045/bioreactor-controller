require('dotenv').config();

const Koa = require('koa');
const bio = new Koa();

// Connect to database
require('./api/db.js');

bio.use(async (ctx, next) => {
  ctx.body = 'Welcome to the bioreactor controller app';
});

bio.listen(1338);

module.exports = bio;

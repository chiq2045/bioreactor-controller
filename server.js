require('dotenv').config();

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'Welcome to the bioreactor controller app';
});

app.listen(3000);

module.exports = app;


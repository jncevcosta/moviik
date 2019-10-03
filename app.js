const koa = require('koa');

const users = require('./controllers/user')
const app = new koa();

app.use(users.routes());
app.use(users.allowedMethods());

module.exports = app;
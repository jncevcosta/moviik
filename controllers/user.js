const Router = require('koa-router');
const koaBody = require('koa-body');
const UserManager = require('../manager/user');

const router = new Router({ prefix: '/users' });

router.get('/', async (ctx) => {
    ctx.response.body = await User.query().where(ctx.request.query);
});

router.get('/:id', async (ctx) => {
    ctx.response.body = await User.query().findById(ctx.params.id).throwIfNotFound();
});

router.post('/', koaBody(), async (ctx) => {
    ctx.response.body = await UserManager.create(ctx.request.body);
});

router.patch('/:id', koaBody(), async (ctx) => {
    ctx.response.body = await User.query().patch(ctx.request.body).where({ id: ctx.params.id })
});

module.exports = router; 
const Koa = require('koa')
const app = new Koa()

app.use((ctx) => {
  ctx.body = 'Hello World'
})

export default {
  path: '/api',
  handler: app.callback()
}
const Koa = require('koa');

const app = new Koa();

app.use((ctx,context)=>{
  //ctx = request response
  ctx.body = "hello,world4!"
})

app.listen(3000,()=>{
  console.log('3000端口已经开启')
})
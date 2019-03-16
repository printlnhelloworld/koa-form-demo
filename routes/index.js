const router = require('koa-router')()
let users = [
  {
    id: 1,
    name: '王一',
    age: '18',
    job: '教师',
    school: 'xxx'
  },
  {
    id: 2,
    name: '王二',
    age: '20',
    job: '前端开发',
    school: 'xxx'    
  },
]


router.post('/user', async (ctx, next) => {
  let data = JSON.parse(ctx.request.body);
  users.push({
    ...data,
    id: users[users.length - 1].id + 1
  })
  ctx.body = {
    status: users
  };
})

router.delete('/user', async (ctx, next) => {
  let data = JSON.parse(ctx.request.body);
  for (let [index, user] of users.entries()) {
    if (user.id == data.id) {
      users.splice(index, 1);
      id = index;
    }
  }
  ctx.body = {
    status: users,
    id: id
  };
})

router.put('/user', async (ctx, next) => {
  let data = JSON.parse(ctx.request.body);
  for (let [index, user] of users.entries()) {
    if (user.id == data.id) {
      users.splice(index, 1, data);
      id = index;
    }
  }
  ctx.body = {
    status: users,
    id: id
  };  
})

router.get('/user', async (ctx, next) => {
  ctx.body = users
})

module.exports = router

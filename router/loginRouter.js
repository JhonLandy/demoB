const Router = require("koa-router");
const data = require("../data.json");
const fs = require("fs");

const loginRouter = new Router();

loginRouter.post("/login", ctx => {
    const loginMess = ctx.request.body;
    if (loginMess.isLogin) {
        ctx.body = data['user'];
    } else {
        if (data['user'].username === loginMess.username && data['user'].password === loginMess.password) {
            ctx.body = "登陆成功！";
        } else {
            ctx.body = JSON.stringify({status: -1})
        }
    }
});

module.exports = loginRouter;
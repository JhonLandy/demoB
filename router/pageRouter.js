const Router = require("koa-router");
const data = require("../data.json");

let pageRouter = new Router();

pageRouter.get("/getImages", ctx => {
    ctx.body = data['image'];
});

pageRouter.post("/lecturer/lists", ctx => {
    let page = ctx.request.query.page;
    let rows = ctx.request.query.rows;
    let start = (page - 1)*rows;
    let end = page*rows - 1;
    let works = [];
    for(let i = start; i <= end; i++) {
        works.push(data['works'][i]);
    }
    ctx.body = works;
});
module.exports = pageRouter;
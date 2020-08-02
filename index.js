const Koa = require("koa");
const KoaBody = require("koa-body")
const Views = require("koa-views");
const Static = require("koa-static");
const routes = require("./router/router");

const app = new Koa();

app.use(KoaBody({
    multipart:true, // 支持文件上传
}))
app.use(Views(__dirname + "/views"), {
    extension: "html"
});
app.use(Static(__dirname + "/static"));

routes(app)

app.listen(4000);

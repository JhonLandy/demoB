const Koa = require("koa");
const KoaBody = require("koa-body")
const Views = require("koa-views");
const Static = require("koa-static");
const router = require("./router/router");

let app = new Koa();

app.use(KoaBody())
app.use(Views(__dirname + "/view"),{
    extension:"html"
});
app.use(Static(__dirname + "/static"));
router(app);

app.listen(4000);

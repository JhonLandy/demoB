const Router = require("koa-router");
const fs = require('fs')
const formdata = require('formidable')
const writeSteam = fs.createWriteStream('static/image.png')
const uploadRouter = new Router();
uploadRouter.post("/upload", (ctx) => {
    // const form = new formdata.IncomingForm();
    // form.on('field', function (name, value) {
    //     ctx.request.data[name] = value;//这里提取的是键值对数据
    // }).on('file', function (name, file) {
    //     ctx.request.files[name] = file;//这里提取上传的文件
    // }).on('end', function () {
    //     ctx.request.startTime = new Date();
    //     //默认保存的文件名是随机串，需要自己重新指定文件名和后缀
    //     for (var k in ctx.request.files) {
    //         var f = ctx.request.files[k];
    //         var n = ctx.request.startTime.format('yyyyMMddHHmmss') + '_' + f.name;
    //         fs.renameSync(f.path, site.config.filePath + "/" + n);
    //     }
    // });

    // form.parse(ctx.request)
    console.log(ctx.req.formidable)
    ctx.status = 200
});


module.exports = uploadRouter;
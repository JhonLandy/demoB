const Router = require("koa-router");
const data = require("../data.json");
const fs = require("fs");
let tableRouter = new Router();

tableRouter.post("/saveTableData", ctx => {
    let reqData = ctx.request.body;

    data['tableData'].forEach((temp, index) => {
        if (temp.id === reqData.id) {
            data['tableData'][index] = reqData;
        }
    })
    let msg = '保存数据成功!';
    fs.writeFile("data.json", JSON.stringify(data),err => {
        msg = err;
    })
    ctx.body= msg;
});

tableRouter.get("/getTableData", ctx => {
    ctx.body = data['tableData'];
});

module.exports = tableRouter;
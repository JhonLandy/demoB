let pageRouter = require('./pageRouter')
let loginRouter = require('./loginRouter')
let tableRouter = require('./tableRouter')

module.exports = function (app) {
    app.use(pageRouter.routes());
    app.use(loginRouter.routes());
    app.use(tableRouter.routes());
}
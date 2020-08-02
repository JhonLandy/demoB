const pageRouter = require('./pageRouter')
const loginRouter = require('./loginRouter')
const tableRouter = require('./tableRouter')
const uploadRouter = require('./uploadRouter')

module.exports = function (app) {
    app.use(pageRouter.routes());
    app.use(loginRouter.routes());
    app.use(tableRouter.routes());
    app.use(uploadRouter.routes());
}
// 此处批量管理注册的webhook
const registerMsgPusherRouter = require('./msg')
const registerLoginCheck = require('./loginCheck')

module.exports = function registerRoute({app, bot}) {
  registerMsgPusherRouter({app, bot})
  registerLoginCheck({app, bot})
} 
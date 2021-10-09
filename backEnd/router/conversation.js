const express = require('express')
const {newConversation, getConversation, twoConversation } = require('../controller/conversation')
const Router = express()

Router.post('/',newConversation)
Router.get("/:userId",getConversation)
Router.get("/:firstUserId/:secondUserId",twoConversation)

module.exports = Router
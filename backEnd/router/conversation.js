const express = require('express')
const {newConversation, getConversation } = require('../controller/conversation')
const Router = express()

Router.post('/',newConversation)
Router.get("/:userId",getConversation)

module.exports = Router
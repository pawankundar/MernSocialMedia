const express = require('express')
const { createMessage, getMessage } = require('../controller/messagess')
const Router = express()

Router.post('/',createMessage)
Router.get('/:conversationId',getMessage)
module.exports = Router
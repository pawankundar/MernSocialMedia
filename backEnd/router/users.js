const express = require("express")
const { signup } = require("../controller/users")
const router = express.Router()

router.get("/",signup)

module.exports = router
const express = require("express")
const { getAllUsers, getUser,updateUser, deleteUser, follow, unfollow } = require("../controller/users")
const router = express.Router()

router.get("/",getUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)
router.put("/:id/follow",follow)
router.put("/:id/unfollow",unfollow)

module.exports = router
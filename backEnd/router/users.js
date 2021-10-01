const express = require("express")
const { getAllUsers, getUser,updateUser, deleteUser, follow, unfollow, getFollowers } = require("../controller/users")
const router = express.Router()

router.get("/",getUser)
router.get('/all',getAllUsers)
router.get("/followers/:userId",getFollowers)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)
router.put("/:id/follow",follow)
router.put("/:id/unfollow",unfollow)

module.exports = router
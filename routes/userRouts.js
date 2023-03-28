const express = require("express")
const { registerUser, loginUser,getMe,forgotPw,resetUpdate} = require("../controllers/userController")
const { protect } = require("../middleware/authMiddleware")
const router = express.Router()

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/forgot-password', forgotPw)
router.post('/reset-password/:id/:token', resetUpdate)


router.get('/me',protect, getMe)



module.exports = router
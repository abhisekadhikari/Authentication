const router = require("express").Router()
const loginController = require("../Controllers/loginController")
const homeController = require("../Controllers/homeController")

const Auth = require("../Middleware/Auth")
let refreshToken = [] // To be stored on Database

router.post("/login", loginController)

router.get("/home", Auth, homeController)
router.post("/token", require("../Controllers/tokenController"))

module.exports = router

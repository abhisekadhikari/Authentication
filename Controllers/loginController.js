const jwt = require("jsonwebtoken")
const fs = require("fs").promises
const path = require("path")
const Login = async (req, res) => {
  const { name } = req.body
  token = jwt.sign({ name }, process.env.ACCESS_TOKEN, { expiresIn: "15s" })
  refreshToken = jwt.sign(name, process.env.REFRESH_TOKEN)
  res.json({ "Access Token": token, "Refresh Token": refreshToken })
  fs.writeFile(
    path.join(__dirname, "../", "Utils", "storeToken.txt"),
    refreshToken
  )
}

module.exports = Login

const path = require("path")

const fs = require("fs").promises

const jwt = require("jsonwebtoken")

const tokenController = async (req, res) => {
  const refreshToken = req.body.token
  const bufferToken = await fs.readFile(
    path.join(__dirname, "../", "Utils", "storeToken.txt")
  )
  const token = bufferToken.toString()
  if (token == "") {
    return res.sendStatus(401)
  }
  if (!token.includes(refreshToken)) {
    return res.sendStatus(403)
  }
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }
    const accessToken = jwt.sign(
      { name: user.name },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "15s",
      }
    )
    res.json({ newAccessToken: accessToken })
  })
}

module.exports = tokenController

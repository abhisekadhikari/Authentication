const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const PORT = 3000

// Init. App

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(morgan("combined"))
app.use(morgan("dev"))
app.set(require("dotenv").config())
app.use("/auth", require("./Routes/userRoutes"))

// Running App on Localhost

app.listen(PORT, () => {
  {
    console.log(`Listining on http://localhost:${PORT}`)
  }
})

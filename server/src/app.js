const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())

const planetsRouter = require("./routes/planets/planets_router")
const launchesRouter = require("./routes/launches/launches_router")

app.use(cors())

app.use("/planets", planetsRouter)
app.use("/launches", launchesRouter)

module.exports = app
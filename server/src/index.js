const http = require("http")

const PORT = process.env.PORT || 8000

const app = require("./app")

const { loadPlanetsData } = require("./models/planets_model")

const server = http.createServer(app)

const startServer = async () => {
    await loadPlanetsData()

    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
}

startServer()
const launches = new Map()

let latestFlightNumber = 100

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'explorer IS1',
    launchDate: new Date('January 14, 2023'),
    target: 'Kepler-442 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true
}

launches.set(launch.flightNumber, launch)

const getAllLaunches = () => {
    return Array.from(launches.values())
}

const addNewLaunch = (launch) => {
    latestFlightNumber++
    launches.set(
        latestFlightNumber,
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customers: ['CHIRAG', 'NASA'],
            flightNumber: latestFlightNumber
        })
    )
}

const existsLaunchWithID = (launchId) => {
    return launches.has(launchId)
}

const abortLaunchId = (launchId) => {
    const aborted = launches.get(launchId)
    aborted.upcoming = false
    aborted.success = false
    return aborted
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithID,
    abortLaunchId
}

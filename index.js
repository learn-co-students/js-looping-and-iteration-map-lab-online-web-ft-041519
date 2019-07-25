// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    const lowCase = drivers.map(driver => driver.toLowerCase())
    return lowCase
}

function nameToAttributes(drivers) {
    const driversObj = drivers.map(driver =>{
        const drivArr = driver.split(" ")
        const drivObj = {firstName: drivArr[0], lastName: drivArr[1]}
        return drivObj
    })
    return driversObj
}

function attributesToPhrase(attributes) {
    const phrase = attributes.map(obj =>{
        return `${obj.name} is from ${obj.hometown}`
    })
    return phrase
}
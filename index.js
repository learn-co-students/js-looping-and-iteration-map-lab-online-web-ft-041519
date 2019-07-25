// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    const lowCase = drivers.map(driver => driver.toLowerCase())
    return lowCase
}

function nameToAttributes(drivers) {
    const driversObj = drivers.map(driver =>{
        const drivArr = driver.split(" ")
        console.log(drivArr)
        const drivObj = {firstName: drivArr[0], lastName: drivArr[1]}
        console.log(drivObj)
        return drivObj
    }
    return driversObj
}

function attributesToPhrase() {

}
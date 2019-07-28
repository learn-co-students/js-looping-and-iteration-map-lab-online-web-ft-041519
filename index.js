function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    let hash = {}
    hash.firstName = driver.split(" ")[0]
    hash.lastName = driver.split(" ")[1]
    return hash
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return  `${driver.name} is from ${driver.hometown}`
  });
}

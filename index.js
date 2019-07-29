// Code your solution in this file.
function lowerCaseDrivers(array) {
    const newArr = []
    array.map(function(driver) {
        newArr.push(driver.toLowerCase());
    })

    return newArr;
}

function nameToAttributes(array) { 
    return array.map(function(driver) {
        return Object.assign({}, { firstName: driver.split(" ")[0], lastName: driver.split(" ")[1] });
      })
  }


function attributesToPhrase(attrs) {
    return attrs.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`;
    })
}

// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newArr = drivers.map(driver => driver.toLowerCase());
    return newArr;
}
//
function nameToAttributes(drivers){
  const fullName = drivers.map(driver => Object.assign({}, {firstName: driver.split(" ")[0]}, {lastName: driver.split(" ")[1]}));
  return fullName;
}

function attributesToPhrase(attr) {
  const newName = attr.map(att => `${att.name} is from ${att.hometown}`);
  return newName;
  }

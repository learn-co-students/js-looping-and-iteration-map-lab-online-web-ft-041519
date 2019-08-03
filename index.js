// Code your solution in this file.

function lowerCaseDrivers (info) {

    const information = info.map(function(eng) { return eng.toLowerCase(); 
});
    return information;
}

function nameToAttributes (info) {

    const information = info.map(function(eng) {  return Object.assign({}, {firstName: eng.split(" ", 1)[0]}
    , {lastName: eng.split(" ", 2)[1]}) } );
    
    return information;

}

function attributesToPhrase (info) {

    const information = info.map(function(eng) {  return eng.name + ' is from ' + eng.hometown } );
    
    return information;

}
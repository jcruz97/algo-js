const readlineSync = require("readline-sync");

let firstName = readlineSync.question("Please put your firstname : ");
let name = readlineSync.question("Please put your name : ");
let city = readlineSync.question("Please put the city you live in : ");

console.log("Your name is " + firstName + " " + name + " and you live in " + city + ".");
const readlineSync = require("readline-sync");

let firstName = readlineSync.question ("Please give your firstname ");

console.log("Hello " + firstName);
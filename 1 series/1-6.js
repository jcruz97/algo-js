const readlineSync = require("readline-sync");

console.log("Put 2 integrers that are NOT multiples nor dividers of each other !");

// First integrers requested to the user
let firstNumber = readlineSync.question("Write your first number : ");
let secondNumber = readlineSync.question("Write your second number : ");

//Numbers divided then the integrer of the result is displayed
let calculus = firstNumber / secondNumber;
let result = Math.trunc(calculus);

console.log("The result is : " + result);
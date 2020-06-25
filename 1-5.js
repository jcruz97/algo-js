const readlineSync = require("readline-sync");

//First numbers serial declared by the user 

let firstNumber = readlineSync.question("Give a decimal number : ");
let secondNumber = readlineSync.question("Give another decimal number NOT a multiple nor divider of the first decimal number : ");

//Calculus made but only the result will be displayed

let intFirstNumber = Math.trunc(firstNumber);  //Integrer part of the first number
let multiplication = intFirstNumber * secondNumber; //Second number multiplied by the integrer part of the first



console.log("The result is : " + multiplication);
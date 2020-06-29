const readlineSync = require("readline-sync");

let favNumber = readlineSync.question("What is your favorite number? ");
let number = 42;


while (favNumber!=number){
    console.log("Are you sure?")
    favNumber = readlineSync.question("What is your favorite number? ");
}

if (favNumber=number){
    
    console.log("( ͡° ͜ ͡°)");
    console.log("N I C E");

}
const readlineSync = require("readline-sync");

console.log("Welcome to my little game, if you fail I'll not be polite fat c*** !");
console.log("You can't put a number above the maximum or under the minimum. ");
    


let min = readlineSync.question("Please put your minimum number : ");
let max = readlineSync.question("Please put your maximum number : ");
let current = readlineSync.question("Please put your current number : ");

if (current<max&&current>min) {
     console.log(current+" is between "+min+" and "+max+".");

} else if (current<min) {
     console.log("Retry or die!");
}
  else if (current>max) {
     console.log("Retry or die!");
}

if (min>max){
    console.log("Error!");
    console.log("In which crazy world is minimum greater than maximum you moron...");
}



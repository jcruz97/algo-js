const rLine = require("readline-sync");

console.log("Will you guess th number between 1 and 100? ");
console.log("--------------------------------------------");

let randNum = Math.floor(Math.random()*100)+1;
let userNum = 0;
//console.log(randNum);

do{
  userNum =Number(rLine.question("Try please :  "));

  if (userNum == randNum){
    console.log("Well done !");       
} 
   if(userNum>randNum){
    console.log("Too high!");
} 
    if(userNum<randNum){
     console.log("Too low!");
}


} while(userNum != randNum);


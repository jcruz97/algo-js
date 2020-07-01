const rLine = require("readline-sync");

let userInt = rLine.question("Please give me a positive (above 0) integer : ");
let arr = [];

function dividers (int){
    
    for (i=int-1;i>1;i--){
        if ((int%i)==0){ 
           arr.push(i);
    }
}

}
dividers(userInt);
console.log("Divisors of "+userInt+" that are not 1 or the number itself : "+arr);

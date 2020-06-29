const readlineSync = require("readline-sync");

let userAge = readlineSync.question("How old are you? ");

if (userAge>=18){

    console.log("Your are an adult, go buy some drugs if you want ");

}  
    else{

        console.log("You are not yet an adult, go buy some candy ");
}


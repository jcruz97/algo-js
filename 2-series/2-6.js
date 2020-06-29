const rline = require("readline-sync");


let userNumber = Number(rline.question("Please enter a number between 1 and 7 : "));

if (userNumber===1){

    console.log("You choose Monday !");

}   else if (userNumber ===2){
        console.log("You choose Tuesday !");
}   
    else if (userNumber ===3){
        console.log("You choose Wednesday !");
}
    else if (userNumber ===4){
        console.log("You choose Thursday !");
}
    else if (userNumber ===5){
        console.log("You choose Friday !");
}
    else if (userNumber ===6){
        console.log("You choose Saturday !");
}
    else if (userNumber ===7){
        console.log("You choose Sunday !");
}   else {
    console.log("Please choose a number between 1 and 7 !")
}
    


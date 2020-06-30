const rLine = require("readline-sync");

console.log("We are going to calculate the distance between two points today :)");
console.log("-------------------------------------------------------------------");

let x1 = rLine.question("Please write the horizontal value of the first point : ");
let y1 = rLine.question("Please write the vertical value of the first point : ");
console.log("----------------------------------------------------");
let x2 = rLine.question("Please write the horizontal value of the second point : ");
let y2 = rLine.question("Please write the vertical value of the second point : ");


let calcDistance = (x1,y1,x2,y2) =>{
    let axisX = x2-x1;
    let axisY = y2-y1;

    let distance = Math.sqrt((axisX**2)+(axisY**2));
    return distance;
}


console.log("The distance between the two points is : " + calcDistance(x1,y1,x2,y2));
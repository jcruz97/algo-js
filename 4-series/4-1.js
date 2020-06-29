//The calcSurface function uses lengthxside rectangle's surface property.

const rline = require("readline-sync");

function calcSurface (l,w) {

    return l * w;
}

console.log("Let's calculate the surface of a rectangle, please give your mesures : ");

let length = rline.question("Which length do you choose? ");
let width = rline.question("Which width do you choose? ");

console.log(calcSurface (length,width));
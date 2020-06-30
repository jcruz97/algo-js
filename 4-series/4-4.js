const rLine = require("readline-sync");

let n = rLine.question("Please put a number : ");
let arrTest = [];



let rand10 = () =>{
    return (Math.floor(Math.random() * 10) +1);   
}



let multiRand =(n) =>{
    arrTest;
    for(i = 1; i <= n; i ++){
        rand10();
        arrTest.push(rand10());

    }
    return arrTest;
}

function average(arr){
    let averageArray = 0;
    for(let elem of arr) {
        averageArray+=elem;

    }
    return (averageArray / arr.length)
}

function min (arr){
    return Math.min.apply(null, arr);
}

function max (arr){
    return Math.max.apply(null, arr);
}

console.log("The array generated : " + multiRand(n));
console.log("The average is : " + average(arrTest));
console.log("The maximum is : " + max(arrTest));
console.log("The minimum is : " + min(arrTest));
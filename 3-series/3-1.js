let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];

let sum1 = array1.reduce(function(a, b){

    return a + b;
}, 0);

console.log(sum1)


let sum2 = array2.reduce(function(a, b){

    return a + b;
}, 0);

console.log(sum2)
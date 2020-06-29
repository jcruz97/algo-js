let array = [1, 2, 3, 4, 5];

let duplicate  = [];

for (let elem of array){

    duplicate.push(elem);
}

console.log(array);
console.log(duplicate);

// Second version
//let duplicate = [...array];

//console.log(array);
//console.log(duplicate);
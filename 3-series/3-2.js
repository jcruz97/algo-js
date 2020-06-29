let total1 = 0;
let total2 = 0;
let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];

for(let i = 0; i < array1.length; i++) {
    total1 += array1[i];
}

let avg1 = total1 / array1.length
console.log(Number(avg1));


for(let i = 0; i < array2.length; i++) {
    total2 += array2[i];
}

let avg2= total2 / array2.length
console.log(Number(avg2));

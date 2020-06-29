const rline = require ("readline-sync");

let nNumber = Number(rline.question("Please put a 'n' number of additions of your choice : "));

for (i = 0; i < nNumber; i ++){
        let n2 = Number(rline.question("Put another number : "));
        result = i+n2;

}

console.log("The result of your addition of numbers is : " + result +".");
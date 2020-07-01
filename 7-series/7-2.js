const rLine = require("readline-sync");

let n = rLine.question("Please write an integer number : ");

function fib(n){

	if (n===1) {

    return [0, 1];

  } else {

    let s = fib(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }

}

console.log(fib(n));
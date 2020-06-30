
let n = 3;

let rand10 = () =>{
    return (Math.floor(Math.random() * 10) +1);   
}



let multiRand =(n) =>{
    let lulu = [ ];
    for(i = 1; i <= n; i ++){
        rand10();
        lulu.push(rand10());

    }
    return lulu;
}

console.log(multiRand(n));


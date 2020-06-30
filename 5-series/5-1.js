const  rLine = require("readline-sync");

let name = rLine.question("Which is your favorite serial? ");
let prodYear =  rLine.question("In which year was it produced? ");
let cast =  rLine.question("Who was in the cast? ");

function askTvSerie (name,prodYear,cast) {
    
    let castList = cast.split (",");
    let userSerial = {
        "Serial-Name" : name,
        "Production-year" : prodYear,
        "Casting" : castList, 
    } 

    
    
    

    return userSerial;
    return castList;
}



  

  let json = JSON.stringify(askTvSerie (name,prodYear,cast));

  let fs = require('fs');

  fs.writeFile('askTvSerie.json', json, (err) => {
     if (err) throw err;
     console.log('The file has been saved!');

  });


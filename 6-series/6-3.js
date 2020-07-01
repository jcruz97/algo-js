class Rectangle {
    constructor (topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width; 
        this.length = length;
    }

    collides(otherRectangle){

        if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
            this.topLeftYPos + this.length > otherRectangle.topLeftYPos){
            return true; 

        }    else{
            return false;
        }
        
    }
}


let generatorR= [];

let randX = () => {
    return Math.round(Math.random() * 200) + 1;
}

let randY = () => {
    return Math.round(Math.random() * 200) + 1;
}

let randW = () => {
    return Math.round(Math.random() * 10) + 1;
}

let randL = () => {
    return Math.round(Math.random() * 20) + 1;
}

function generator (times){

    for (i=0; i<times; i++) {
        generatorR [i]= new Rectangle (randX(),randY(),randW(),randL());
    }
    comparator(generatorR);
}

let comparator = (arr) => {
    let rectangleA = generatorR[0];
    for (let elt of arr) {
        rectangleA.collides(elt);
    }
}

console.log(generator (1000));
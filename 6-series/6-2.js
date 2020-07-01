class Rectangle {
    constructor (topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width; 
        this.length = length;
    }

    collides(otherRectangle){

        if (this.topLeftXPos === otherRectangle.topLeftXPos && this.topLeftYPos === otherRectangle.topLeftYPos){

            console.log("Rectangles have collided");

        }    else{
                console.log("Rectangles haven't collided");
        }
        

    }
}

let rectangle = new Rectangle(5, 2, 4, 10);
let otherRectangle = new Rectangle(5, 2, 7, 10);
console.log(rectangle.collides(otherRectangle));
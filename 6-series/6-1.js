class circle {
    
    constructor (xPos,yPos,radius){
        this.xPos  = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }

    get surface() {
         return (Math.PI*(this.radius)**2);
    }
}

let firstCircle = new circle (1,1,10);
console.log(firstCircle.surface);
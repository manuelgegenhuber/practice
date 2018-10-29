function Shape(color){
    this.color = color;
}

function Circle(radius, color){
    Shape.call(color);
    this.radius = radius;
}

Circle.prototype.draw = function(){
    console.log("draw");
}

function Square(size){
    this.size = size;
}

//Child and Parent are uppercase -> Constructor functions
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

/*---------------------------------------------------------*/

extend(Circle, Shape);
extend(Square, Shape);


const s = new Shape();
const c = new Circle(1, "red")
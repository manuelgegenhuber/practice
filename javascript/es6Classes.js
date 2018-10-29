//Construktor Function
/*function Circle(radius){
    this.radius = radius;

    this.draw = function(){
        console.log("draw");
    }
}*/


const _radius = new WeakMap();
//Es6 Classes

class Circle{
    constructor(radius){
        _radius.set(this, radius);
        //declare method here like in constructor function, so it's on the object
        this.move = function(){
            
        }
    }
    draw(){ //methods -> gets on Prototype
        console.log("draw");
    }

    //static Methods -> on Class level
    static parser(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }

    [5-8](){
        console.log("computed property names");
    }

    get radius(){
        return _radius.get(this);
    }
    set radius(r){
        _radius(this, r);
    }
}


const c = new Circle(5);
const c2 = new Circle(15);

const circle = Circle.parser('{"radius": 1}');

/*----Inheritance and super----------------------------------------------------*/

/*class Shape{

    constructor(color){
        this.color = color;
    }

    move(){
        console.log('move');
    }
}

class Circle extends Shape{

    constructor(color, radius){
        super(color);
        this.radius = radius;
    }

    draw(){
        console.log('draw');
    }
    move(){
        super.move();
        console.log("move Circle");
    }
}

const c = new Circle("red", 1);*/


/*Stack*/
const _stacklist = new WeakMap();
class Stack{
    constructor(){
        //Array that begins empty
        _stacklist.set(this, []);
    }

    //pop - removes object on the top of stack - on empty stack - throws exception
    pop(){
        const stacklist = _stacklist.get(this);
        if(stacklist.length === 0){
            throw new Error("Empty Stack");
        }else{
            stacklist.pop();
        }
    }

    //push - adds object on the top of stack
    push(val){
        _stacklist.get(this).push(val);
    }

    //peek - shows last object on the stack -  on empty stack - throws exception
    peek(){
        const stacklist = _stacklist.get(this);
        if(stacklist.length === 0){
            throw new Error("Empty Stack");
        }else{
            return stacklist[stacklist.length - 1];
        }
    }

    //count - numbers of objects in the stack // get because it should only be readable
    get count(){
        return _stacklist.get(this).length;
    }
}

//Implementation Detail
const _radius = new WeakMap();

//Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}



module.exports = Circle; //Single export -> export object is Circle

/* Exports object with Properties Circle and Square
module.exports.Circle = Circle;
module.exports.Square = Square;
*/
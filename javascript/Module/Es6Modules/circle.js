const _radius = new WeakMap();

//Export Circle but not the _radius WeakMap
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}
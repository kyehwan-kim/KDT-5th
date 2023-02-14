//shape
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

//Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

//Triangle
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

//Circle
class Cirlce extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return this.radius ** 2 * 3.14;
  }
}

const rec = new Rectangle(10, 10);
const tri = new Triangle(10, 10);
const cir = new Cirlce(3);

console.log();

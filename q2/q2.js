class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea = () => {
    return Math.PI * this.radius ** 2;
  };

  getPerimeter = () => {
    return 2 * Math.PI * this.radius;
  };
}

let circle1 = new Circle(11);
console.log(circle1.getArea());

let circle2 = new Circle(4.44);
console.log(circle2.getPerimeter());

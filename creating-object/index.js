// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
console.log("~ circle", circle);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);
console.log("~ another", another);

// Functions are Objects
const Circle1 = new Function(
  "radius",
  `
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  }`
);

const circle1 = new Circle1(1);
console.log("~ circle1", circle1);

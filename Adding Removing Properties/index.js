// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);
console.log("~ circle before adding property \n", circle);

// Adding properties
circle.location = { x: 1 }; //using dot notation
circle["location"] = { x: 1 }; //using bracket notation
console.log("~ circle after adding property \n", circle);

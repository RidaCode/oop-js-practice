// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

// Get all properties in an object using for in loop
console.log("~ all the properties in the circle");
for (let key in circle) {
  console.log(key);
}

// Get all properties and values in an object using for in loop
console.log("~ all the properties with values in the circle");
for (let key in circle) {
  console.log(key, circle[key]);
}

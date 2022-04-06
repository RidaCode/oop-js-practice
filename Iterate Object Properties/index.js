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

// Get only the properties with values
// that are not methods in an object using for in loop
console.log(
  "~ only all the properties with values in the circle without methods"
);
for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

// Check if object has a given property
console.log("~ Check if circle has a radius property");
if ("radius" in circle) console.log("Circle has a radius.");

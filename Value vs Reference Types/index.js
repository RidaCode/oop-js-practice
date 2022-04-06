// Value Type
Number;
String;
Boolean;
Symbol;
undefined;
null;

// y is a copy from x, and both are independent from each other
let x = 10;
let y = x;
x = 20;
console.log("x", x, "y", y);

// Reference Types
Object;
Function;
Array;

// b is a reference to a,
// in other words both a and b are pointing to the same object in memory
let a = { value: 10 };
let b = a;
a.value = 20;
console.log("a", a, "b", b);

// Using functions with value types
let number = 10;
function increase(number) {
  number++;
}
console.log("number before increase using value types", number);
increase(number);
console.log("number after increase using value types", number);

// Using functions with reference types
let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}
console.log("obj before increase using reference types", obj);
increase(obj);
console.log("obj after increase using reference types", obj);

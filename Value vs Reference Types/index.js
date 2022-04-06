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

// value or primitives types

// example 1
let x = 10;
let y = x;

x = 20;

// example 2
let number = 10;
function increase(number) {
  number++;
}

increase(number);
console.log(number);

// reference types

// example 1

let i = { value: 10 };
let j = x;

i.value = 20;

// example 2
let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);

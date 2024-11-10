const numbers = [1, 2, 3, 4];

// end
const last = numbers.pop();

// begging
const first = numbers.shift();

// // middle
numbers.splice(2, 0);
console.log(numbers);
console.log(first);

// Write a function that takes two numbers (start, end) and returns the sum of all numbers between them, inclusive.


function adding(start, end) {
  let output = 0;
  for (let i = start; i <= end; i++) {
    output = output + i;
  }
  return output;
}

console.log(adding(1, 100));

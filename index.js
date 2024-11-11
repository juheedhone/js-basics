
// exercise 1
const numbers = arraysFromRange(-10, -4);

console.log(numbers);

function arraysFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

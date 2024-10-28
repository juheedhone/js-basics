// divisible by 3 => Fizz
// divisible by 5 => Buzz
// divisible by 3 and 5 => FizzBuzz
// not divisible by 3 or 5 => input
// not a number => 'Not a number'

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") return "not a number";

  if (input % 3 === 0 && input % 5 == 0) return "fizzBuzz";

  if (input % 3 === 0) return "fizz";

  if (input % 5 === 0) return "buzz";
}

const numbers = [1, 2, 3, 4];

// every
const allPositive = numbers.every((value) => value >= 0);

console.log(allPositive);

// some
const atLeastOnePositive = numbers.some((value) => value >= 0);

console.log(atLeastOnePositive);

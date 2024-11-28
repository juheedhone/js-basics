// SUM OF ARGUMENTS

// solution1

// function sum(...arguments) {
//   // console.log(arguments);
//   // [[1, 2, 3, 4],[]];
//   return arguments.reduce((a, b) => {
//     if (Array.isArray(b)) {
//       return a + b.reduce((e1, e2) => e1 + e2);
//     }
//     return a + b;
//   }, 0);
// }
// console.log(sum([1, 2, 3, 4], [1, 2, 3, 4, 5]));


// solution 2

// function sum(...arguments) {
//   // console.log(arguments);
//   // [[1, 2, 3, 4],[4]];

//   return arguments[0].reduce((a, b) => a + b);
// }
// console.log(sum([1, 2, 3, 4, 5],[4]));

// solution 3

function sum(...items) {
  // console.log(arguments);
  // [[1, 2, 3, 4],[4]];

  if (items.length === 1 && Array.isArray(items[0])) {
    items = [...items[0]];
  }

  return items.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5));

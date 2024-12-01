// exercise flattenArray

function flattenArray(array) {
  let combined = array[0];
  for (let i = 1; i < array.length; i++) {
    combined = [...combined, ...array[i]];
  }
  console.log(combined);
}

flattenArray([
  [1, 2],
  [3, 4],
  [3, 4],
]);

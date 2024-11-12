// exercise 4
const numbers = [1, 2, 3, 4];

console.log(move(numbers, 3, -2));

function move(array, index, offset) {
  let output = [];
  const elementToMove = array[index];
  const elementNewIndex = index + offset;

  if (elementNewIndex >= array.length && elementNewIndex < 0)
    console.error("bad offset");

  if ((offset = 0)) return array;

  output =
    offset > 0
      ? [
          ...array.slice(0, index),
          ...array.slice(index + 1, elementNewIndex + 1),
          elementToMove,
          ...array.slice(elementNewIndex + 1),
        ]
      : [
          ...array.slice(0, elementNewIndex),
          elementToMove,
          ...array.slice(elementNewIndex, index),
          ...array.slice(index + 1),
        ];
  return output;
}

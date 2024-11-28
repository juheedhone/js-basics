// countOccurrence

const number = [1, 2, 3, 4, 5, 2];

const count = countOccurrence(number, 2);

console.log(count);

function countOccurrence(array, searchElement) {
  // let count = 0;
  // for (let element of array) {
  //   if (searchElement === element) count++;
  // }
  // return count;

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, searchElement, current);
    return accumulator + occurrence;
  }, 0);
}

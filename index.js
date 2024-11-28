// countOccurrence handling error

function countOccurrence(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("please give array");
  }
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, searchElement, current);
    return accumulator + occurrence;
  }, 0);
}

const number = [1, 2, 3, 4, 5, 2];

try {
  const count = countOccurrence(null, 2);
  console.log(count);
} catch (e) {
  console.error(e.message);
}

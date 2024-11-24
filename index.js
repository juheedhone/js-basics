const numbers = [11, 1, 2, 3, 4, 8, 9];

const max = getMax([1, 2, 11]);

function getMax(array) {
  if (array.length === 0) return undefined;

//   solution 1
    if ((maximum = Math.max(...array))) {
      return maximum;
    }


//   solution 2
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) max = array[i];
    }
    return max;


//   solution 3(reduced method)

  return max = array.reduce((a, b) => (a > b )? a : b);
  
}

console.log(max);

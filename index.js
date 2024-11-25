// Write a function that takes a number as input and returns whether it is “Positive,” “Negative,” or “Zero.”

function number(num) {
  {
    if (num < 0) return "negative";
    else if (num > 0) return "positive";
    else if (num === 0) return "zero";
  }
}

console.log(number(0));

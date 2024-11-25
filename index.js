// Write a function that takes a random number (1-100) and a guess, then returns whether the guess is too high, too low, or correct.


function guessNumber(num) {
  let number = 20;
  {
    if (num === number) return "correct";
    else if (num < number) return "to low";
    else if (num > number) return "to high";
  }
}

console.log(guessNumber(25));

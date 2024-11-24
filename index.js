// Write a program to check if a given string is a palindrome (reads the same backward).

function palindrome(word) {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) return false;
  }
  return true;
}

console.log(palindrome("radar"));

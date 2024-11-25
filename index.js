// . Find Numbers with Specific Conditions

// •	The number is divisible by 3 but not by 2.
// •	The number is divisible by 5 but not by 4.

for (let i = 1; i <= 100; i++) {
  // if (i % 3 === 0 && i % 2 !== 0) console.log(i);
  if (i % 5 === 0 && i % 4 !== 0) console.log(i);
}

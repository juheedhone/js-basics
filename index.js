// multiple by 3 add 5

sum(10);

function sum(limit) {
  let total = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) total = i + total;
  }
  console.log(total);
}

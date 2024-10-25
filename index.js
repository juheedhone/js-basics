let i = 0;
while (i <= 100) {
  // if (i === 50) break;

  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

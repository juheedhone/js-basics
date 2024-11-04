showPrime(11);

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return num + " is composite";
    }
  }
  return num + " is prime";
}

function showPrime(limit) {
  for (let i = 2; i <= limit; i++) {
    console.log(isPrime(i));
  }
}

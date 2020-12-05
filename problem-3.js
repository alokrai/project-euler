// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?
// 6857

function isPrime(num) {
  let i = 2;
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function largestPrimeFactor(num) {
  for (let i = parseInt(Math.sqrt(num / 2)); i >= 1; i--) {
    if (num % i === 0) {
      if (isPrime(i)) return i;
    }
  }
  return i;
}

console.log(largestPrimeFactor(600851475143));

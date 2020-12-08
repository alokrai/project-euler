// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

// 142913828922

// TODO: Improve the prime function,sieve of eratosthenes
const primes = [2];

function isPrime(num) {
  for (let i = 0; i < primes.length; i++) {
    if (num % primes[i] === 0) return false;
  }
  return true;
}

function generatePrimes() {
  for (let i = 3; i < 2000000; i = i + 2) {
    if (isPrime(i)) {
      primes.push(i);
      console.log(i);
    }
  }
}

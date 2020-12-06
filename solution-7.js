// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?
const { PerformanceObserver, performance } = require("perf_hooks");

const primes = [2];

function isPrime(num) {
  let i = 2;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const primeNumber = (n) => {
  let num = 3;
  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num += 1;
  }
  return primes[n - 1];
};

const t0 = performance.now();
console.log(primeNumber(10001));
const t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");

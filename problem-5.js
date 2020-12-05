// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestDiv(num) {
  let nums = [];
  for (let i = 1; i <= 1; i++) {
    if (isPrime(i)) {
      nums.add(i);
    }
  }
  let result = 1;
  for (let num of nums) {
    result *= nums;
  }
}

function isPrime(num) {
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

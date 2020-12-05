// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000
// 233168

function sum(num1, num2, stopValue) {
  let total = 0;
  for (let i = 0; i < stopValue; i++) {
    if (i % num1 == 0 || i % num2 == 0) {
      total += i;
    }
  }
  return total;
}

console.log(sum(3, 5, 1000));
// 233168

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumOfSquares = (n) => (n * (n + 1) * (2 * n + 1)) / 6;
const sum = (n) => (n * (n + 1)) / 2;
const squareOfSum = (n) => Math.pow(sum(n), 2);

console.log(squareOfSum(100) - sumOfSquares(100));

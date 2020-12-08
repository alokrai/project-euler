// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// 906609
const reverseStr = (str) => [...str].reverse().join("");

function isPalindrome(num) {
  return String(num) === reverseStr(String(num));
}

function findThreeDigitPalindrome() {
  num1 = 999;
  num2 = 999;
  let palindromes = [];
  for (let i = num1; i > 900; i--) {
    for (let j = num2; j > 900; j--) {
      const product = i * j;
      if (isPalindrome(product)) {
        palindromes.push(product);
      }
    }
  }
  return Math.max.apply(Math, palindromes);
}

console.log(findThreeDigitPalindrome());
// 906609

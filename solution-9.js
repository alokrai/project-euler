// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// 31875000

function find() {
  for (let i = 1; i < 1000; i++) {
    for (let j = 1; j < 1000; j++) {
      for (let k = 1; k < 1000; k++) {
        if (
          Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2) &&
          i + j + k === 1000
        )
          return i * j * k;
      }
    }
  }
}

console.log(find());
// 31875000

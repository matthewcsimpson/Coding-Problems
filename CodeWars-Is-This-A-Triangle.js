// Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with
// the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  // the three sides of a triangle rule states that a given side
  // must be smaller than the sum of the other two sides
  // therefore: if a + b > c, and also b + c > a, and also c + a > b, then it can be a triangle.
  return a + b > c && b + c > a && c + a > b;
}

console.log(isTriangle(1, 2, 2)); // expect true
console.log(isTriangle(7, 2, 2)); // expect false
console.log(isTriangle(5, 1, 2)); // expect false
console.log(isTriangle(1, 2, -3)); // expect false
console.log(isTriangle(4, 2, 3)); // expect true

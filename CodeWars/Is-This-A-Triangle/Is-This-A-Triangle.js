/**
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns boolean
 */
function isTriangle(a, b, c) {
  // the three sides of a triangle rule states that a given side
  // must be smaller than the sum of the other two sides
  // therefore: if a + b > c, and also b + c > a, and also c + a > b, then it can be a triangle.
  return a + b > c && b + c > a && c + a > b;
}

module.exports = isTriangle;



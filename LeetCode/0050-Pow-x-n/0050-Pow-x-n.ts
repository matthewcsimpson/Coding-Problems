const myPow = (x: number, n: number): number => {
  // Base case: any number raised to the power of 0 is 1
  // If the base is 0, the result is always 0

  if (n === 0) return 1;
  if (x === 0) return 0;

  let res = 1; // Initialize the result
  let base = x; // Start with the base value

  // Loop to calculate the power using exponentiation by squaring
  for (let exp = Math.abs(n); exp > 0; exp = Math.floor(exp / 2)) {
    // If the current exponent is odd, multiply the result by the base
    if (exp % 2 === 1) res *= base;

    // Square the base for the next iteration
    base *= base;
  }

  // If the exponent is negative, flip it positive
  return n < 0 ? 1 / res : res;
};

export default myPow;

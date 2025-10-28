/**
 * Checks if a number is a power of four.
 * @param n - The number to check.
 * @returns True if n is a power of four, false otherwise.
 */
const isPowerOfFour = (n: number): boolean => {
  // If you get to 0, n cannot be a power of four.
  if (n === 0) {
    return false;
  }

  //   Use a temp variable to avoid modifying n.
  let check = n;

  // While check is divisible by 4, keep dividing it by 4.
  // Break out of the loop when it's no longer divisible by 4.
  while (check % 4 === 0) {
    check = check / 4;
  }

  // If we end up with 1 (ie: 4^0), then it is a power of four.
  return check === 1;
};

export default isPowerOfFour;

const isPerfectSquare = (num: number): boolean => {
  // Initialize the lower and higher bounds
  let lower = 1;
  let higher = num;

  // Perform the binary search
  while (lower <= higher) {
    // Find the middle point
    const middle = Math.floor((lower + higher) / 2);
    // Calculate the square of the middle point
    const root = middle * middle;
    // Check if the square is equal to the number, if yes, return true
    if (root === num) {
      return true;
      // If the square is greater than the number, adjust the higher bound
    } else if (root > num) {
      higher = middle - 1;
      // If the square is less than the number, adjust the lower bound
    } else {
      lower = middle + 1;
    }
  }

  // If no perfect square root is found, return false
  return false;
};

export default isPerfectSquare;

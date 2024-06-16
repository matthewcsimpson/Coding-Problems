/**
 * Calculates the minimum number of flips required to make a string monotone increasing.
 * 
 * @param s The input string.
 * @returns The minimum number of flips required.
 */
function minFlipsMonoIncr(s: string): number {
  // Variables to count the number of ones and flips.
  let ones: number = 0;
  let flips: number = 0;

  // Loop through the string.
  for (let i = 0; i < s.length; i++) {
    // If the current character is '0'...
    if (s[i] === "0") {
      // Reset flips to be either the current number of flips + 1
      // or the number of ones, whichever is smaller.
      flips = Math.min(flips + 1, ones);
    } else {
      // If the current character is '1', increment ones.
      ones++;
    }
  }
  return flips;
}

export default minFlipsMonoIncr;

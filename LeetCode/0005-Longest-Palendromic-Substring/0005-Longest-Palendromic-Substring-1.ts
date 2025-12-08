/**
 * Find the longest palindromic substring in the given string.
 * @param s
 * @returns
 */
const longestPalindrome = (s: string): string => {
  // Base case: if string has less than 2 characters, it's already technically a palindrome
  if (s.length < 2) {
    return s;
  }

  // Track the start and end indices of the longest palindrome found
  let start = 0;
  let end = 0;

  // Iterate through each character as a potential palindrome center
  for (let i = 0; i < s.length; i++) {
    // Case 1: Check for odd-length palindromes (single character center)
    let left = i;
    let right = i;

    // Expand outward from center while characters match
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // Update longest palindrome if current one is longer
      if (right - left > end - start) {
        start = left;
        end = right;
      }

      // Move pointers outward
      left--;
      right++;
    }

    // Case 2: Check for even-length palindromes (two character center)
    left = i;
    right = i + 1;
    // Expand outward from center while characters match
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // Update longest palindrome if current one is longer
      if (right - left > end - start) {
        start = left;
        end = right;
      }
      // Move pointers outward
      left--;
      right++;
    }
  }

  // Extract and return the longest palindrome substring using stored indices
  return s.slice(start, end + 1);
};

export default longestPalindrome;

/**
 * Find the longest palindromic substring using Manacher's Algorithm.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param s - Input string
 * @returns The longest palindromic substring
 */
const longestPalindromeManacher = (s: string): string => {
  // Base case: empty or single character
  if (s.length < 2) {
    return s;
  }

  // Step 1: Preprocess the string by inserting '#' between characters
  // This transforms the string to handle both odd and even length palindromes uniformly
  // Example: "babad" becomes "#b#a#b#a#d#"
  let processed = "#";
  for (let char of s) {
    processed += char + "#";
  }

  // Array to store the radius of palindrome at each position
  const palindromeRadii = new Array(processed.length).fill(0);

  let center = 0; // Center of the rightmost palindrome
  let right = 0; // Right boundary of the rightmost palindrome

  // Track the position and length of the longest palindrome found
  let maxLen = 0;
  let maxCenter = 0;

  // Step 2: Iterate through the processed string
  for (let i = 0; i < processed.length; i++) {
    // Mirror position of i with respect to center
    const mirror = 2 * center - i;

    // If i is within the right boundary, we can use previously computed values
    if (i < right) {
      // Use the smaller of: mirror's radius or distance to right boundary
      palindromeRadii[i] = Math.min(right - i, palindromeRadii[mirror]);
    }

    // Try to expand palindrome centered at i
    let left = i - (1 + palindromeRadii[i]);
    let rightExpand = i + (1 + palindromeRadii[i]);

    // Expand while characters match and within bounds
    while (
      left >= 0 &&
      rightExpand < processed.length &&
      processed[left] === processed[rightExpand]
    ) {
      palindromeRadii[i]++;
      left--;
      rightExpand++;
    }

    // If palindrome centered at i extends past right, update center and right
    if (i + palindromeRadii[i] > right) {
      center = i;
      right = i + palindromeRadii[i];
    }

    // Track the longest palindrome
    if (palindromeRadii[i] > maxLen) {
      maxLen = palindromeRadii[i];
      maxCenter = i;
    }
  }

  // Step 3: Extract the longest palindrome from the original string
  // The start position in the original string is (maxCenter - maxLen) / 2
  const start = Math.floor((maxCenter - maxLen) / 2);
  return s.substring(start, start + maxLen);
};

export default longestPalindromeManacher;

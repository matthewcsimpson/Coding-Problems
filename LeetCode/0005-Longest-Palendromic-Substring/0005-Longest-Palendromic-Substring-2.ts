/**
 * Find the longest palindromic substring using Dynamic Programming.
 * @param s - Input string
 * @returns The longest palindromic substring
 */
const longestPalindromeDP = (s: string): string => {
  // Base case: empty or single character
  if (s.length < 2) {
    return s;
  }

  // Create a 2D table where dp[i][j] = true if substring s[i...j] is a palindrome
  const checkTable: boolean[][] = Array.from({ length: s.length }, () =>
    Array(s.length).fill(false)
  );

  // Track the start index and maximum length of the longest palindrome found
  let start = 0;
  let maxLength = 1;

  // Base case: All single characters are palindromes
  for (let i = 0; i < s.length; i++) {
    checkTable[i][i] = true;
  }

  // Check for two-character palindromes
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      checkTable[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check for palindromes of length 3 and greater
  // len is the length of substring we're checking
  for (let len = 3; len <= s.length; len++) {
    // i is the starting index of substring
    for (let i = 0; i < s.length - len + 1; i++) {
      // j is the ending index of substring
      const j = i + len - 1;

      // Check if s[i...j] is a palindrome
      // It's a palindrome if:
      // 1. The characters at both ends match (s[i] === s[j])
      // 2. The substring between them is also a palindrome (checkTable[i+1][j-1])
      if (s[i] === s[j] && checkTable[i + 1][j - 1]) {
        checkTable[i][j] = true;
        start = i;
        maxLength = len;
      }
    }
  }

  // Extract and return the longest palindrome substring
  return s.substring(start, start + maxLength);
};

export default longestPalindromeDP;

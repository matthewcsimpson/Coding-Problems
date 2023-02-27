function isPalindrome(s: string): boolean {
  // Sanitize he string.  use regez to remove whitespace & special
  // characters and then convert to lower case.
  const sanitized = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Counters to start at the left and right of the word, respectively.
  let left = 0,
    right = sanitized.length - 1;

  // While loop which increments the counters up from the left and down
  // from the right until they meet.
  while (left < right) {
    // If the characters at the current places don't match, return false
    // because the string cannot be a palindrome.
    if (sanitized[left] !== sanitized[right]) {
      return false;
    }
    // increment the left counter up and decrement the right counter down
    left++;
    right--;
  }
  // If we made it here return true, because we actually made it here.
  return true;
}

export default isPalindrome;


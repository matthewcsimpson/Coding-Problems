function isPalindrome(s: string): boolean {
  // sanitize he string.  use regez to remove whietspace & special
  // characters and then convert to lower case.
  const sanitized = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // counters to start at the left and right of the word, respectively.
  let left = 0,
    right = sanitized.length - 1;

  // while loop which increments the counters up from the left and down
  // from the right until they meet.
  while (left < right) {
    // if the characters at the current places don't match, return false
    // because the string cannot be a palindrome.
    if (sanitized[left] !== sanitized[right]) {
      return false;
    }
    // iterate the left counter up and the right counter down
    left++;
    right--;
  }
  // if we made it here return true, because it actually made it here.
  return true;
}

export default isPalindrome;


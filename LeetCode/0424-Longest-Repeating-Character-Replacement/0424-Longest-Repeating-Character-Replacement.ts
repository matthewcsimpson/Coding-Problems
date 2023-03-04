function characterReplacement(s: string, k: number): number {
  // a map to hold the count
  let count = new Map();
  // a variable to hold he eventual result
  let result = 0;
  // a variable to hold the current left index.
  let left = 0;
  // a variable to hold the count for the most frequently appearing char
  let mostFreq = 0;

  // loop the array.  calling the variable right, as it is the right hand pointer.
  for (let right = 0; right < s.length; right++) {
    // if the char at s[right] exists in the count map as a key increment said count.
    if (s[right] in count) {
      count[s[right]]++;
      // otherwise, add it to the map with a value of one.
    } else {
      count[s[right]] = 1;
    }

    // Update the count of the most frequently apparing character with either itself,
    // or with the count of the char at s[right], whichver is higher
    mostFreq = Math.max(mostFreq, count[s[right]]);

    // if the current lenght (right - left + 1 - mostFreq) is greater than k,
    // decrement the count of he char at s[left], and delete it if it's zero.
    // then increment the left pointer.
    if (right - left + 1 - mostFreq > k) {
      count[s[left]]--;
      if (count[s[left]] === 0) {
        delete count[s[left]];
      }
      left++;
    }
    // the result is either the current result, or the right-left+1.  Whichever is larger.
    result = Math.max(result, right - left + 1);
  }
  return result;
}
export default characterReplacement;

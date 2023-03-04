function lengthOfLongestSubstringTS(s: string): number {
  let start: number = 0;
  let maxlength: number = 0;
  let map = new Map();

  // Loop the string
  for (let i = 0; i < s.length; i++) {
    // If the current letter is in the map AND the stored index thereof is higher
    // than the current start index, re-assign the start index to the index after the current
    if (map.get(s[i]) >= start) {
      start = map.get(s[i]) + 1;
    }
    // Set the current letter and its index as a pair in the map.
    map.set(s[i], i);

    // If the cirrent index - the start index is larger than the currently stored max length,
    // resassign the max length with that value.
    maxlength = i - start + 1 > maxlength ? i - start + 1 : maxlength;
  }
  return maxlength;
}

export default lengthOfLongestSubstringTS;

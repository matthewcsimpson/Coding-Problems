function camelcase(s: string): number {
  // Because we know the strings will be well formed, we can start assuming the first word is present.
  let count = 1;
  // Now, we loop the string and count each capital letter to count the remaining words. 
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      count += 1;
    }
  }
  return count;
}

export default camelcase;
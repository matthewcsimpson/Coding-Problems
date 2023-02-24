function groupAnagrams(strs: string[]): string[][] {
  // New Map to hold the values which are anagrams of each other.
  const dictionary = new Map<string, string[]>();

  // loop the array.
  for (let i = 0; i < strs.length; i++) {
    // we need a key for our key-value pairs.  We will use the alphabetically sorted
    // version of a given string.
    const key = strs[i].split("").sort().join("");

    // if the key doesn't already exist, create it,
    // and create a new array as its value to hold the current string.
    if (!dictionary[key]) {
      dictionary[key] = new Array();
      dictionary[key].push(strs[i]);
      // if it does exist, push the current value into the array that will exist there.
    } else {
      dictionary[key].push(strs[i]);
    }
  }
  // now return the values of the Map.
  return Object.values(dictionary);
}

export default groupAnagrams
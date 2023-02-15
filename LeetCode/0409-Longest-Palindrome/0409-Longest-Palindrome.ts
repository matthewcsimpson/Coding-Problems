const longestPalindrome = (s: string): number => {
  // an object to track the letters
  let dictionary = {};
  // a variable to track the result
  let result = 0;

  // loop the incoming string.
  for (const letter of s) {
    // if the current letter isnt in the tracking object, add it.
    if (!dictionary[letter]) {
      dictionary[letter] = 1;
    } else {
      // if it is in the tracking object, iterate it.
      dictionary[letter] += 1;
    }
  }

  // loop the tracking object.
  for (const letter in dictionary) {
    // if the current letter was counted more than once,
    // then add an even number of them to the result.
    if (dictionary[letter] > 1) {
      result += dictionary[letter] - (dictionary[letter] % 2);
    }
  }

  // check the result number against the length of the incoming string
  // if it is smaller than the length, then add one.  otherwise return it as is. 
  // this will account for odd numbered strings/counts 
  return result < s.length ? result + 1 : result;
};

export default longestPalindrome;



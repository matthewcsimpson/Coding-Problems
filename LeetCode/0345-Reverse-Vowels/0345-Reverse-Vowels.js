// 2022-11-04
// 345. Reverse Vowels of a String
// Easy
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower
// and upper cases, more than once.

// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:
// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // split the string into an aray
  let temp = s.split("");
  // new array to hold the vowels .
  let holder = [];
  // new array to create the returned string with.
  let returnstring = [];

  // loop the temp array IN REVERSE and add any vowels to our holding array
  for (let i = temp.length - 1; i >= 0; i--) {
    if (
      temp[i].toLocaleLowerCase() === "a" ||
      temp[i].toLocaleLowerCase() === "e" ||
      temp[i].toLocaleLowerCase() === "i" ||
      temp[i].toLocaleLowerCase() === "o" ||
      temp[i].toLocaleLowerCase() === "u"
    ) {
      holder.push(s[i]);
    }
  }

  // loop the temp array again, and if it encounters a vowel,
  // shift() the vowel at the start of the holding array into the returnarray.
  for (let j = 0; j < temp.length; j++) {
    if (
      temp[j].toLocaleLowerCase() === "a" ||
      temp[j].toLocaleLowerCase() === "e" ||
      temp[j].toLocaleLowerCase() === "i" ||
      temp[j].toLocaleLowerCase() === "o" ||
      temp[j].toLocaleLowerCase() === "u"
    ) {
      returnstring[j] = holder.shift();
      // if the character at i is not a vowel, then add the character from the
      // same index in the temp array to this place.
    } else {
      returnstring[j] = temp[j];
    }
  }

  // return the joined return array.
  return returnstring.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("the quick brown fox jumps over the lazy dog"));

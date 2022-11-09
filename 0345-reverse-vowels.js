// 2022-11-04

// 345. Reverse Vowels of a String
// Easy
// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

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
  let temp = s.split("");
  let holder = [];
  let returnstring = [];

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

  for (let j = 0; j < temp.length; j++) {
    if (
      temp[j].toLocaleLowerCase() === "a" ||
      temp[j].toLocaleLowerCase() === "e" ||
      temp[j].toLocaleLowerCase() === "i" ||
      temp[j].toLocaleLowerCase() === "o" ||
      temp[j].toLocaleLowerCase() === "u"
    ) {
      returnstring[j] = holder.shift();
    } else {
      returnstring[j] = temp[j];
    }
  }

  return returnstring.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("the quick brown fox jumps over the lazy dog"));

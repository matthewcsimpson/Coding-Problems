// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line,
// making a grid. For example, strs = ["abc", "bce", "cae"] can be arranged as:

// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically.
// In the above example (0-indexed),
// columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted
// while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

// Return the number of columns that you will delete.

// Example 1:
// Input: strs = ["cba","daf","ghi"]
// Output: 1
// Explanation: The grid looks as follows:
//   cba
//   daf
//   ghi
// Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.

// Example 2:
// Input: strs = ["a","b"]
// Output: 0
// Explanation: The grid looks as follows:
//   a
//   b
// Column 0 is the only column and is sorted, so you will not delete any columns.

// Example 3:
// Input: strs = ["zyx","wvu","tsr"]
// Output: 3
// Explanation: The grid looks as follows:
//   zyx
//   wvu
//   tsr
// All 3 columns are not sorted, so you will delete all 3.

// Constraints:
// n == strs.length
// 1 <= n <= 100
// 1 <= strs[i].length <= 1000
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = (strs) => {
  // variable to keep track of how many columns will be deleted.
  let count = 0;

  // start the first loop, which is through each individual string.
  // we are uising the first one since it will always exist.
  for (let i = 0; i < strs[0].length; i++) {
    // a new string to keep track of the characters.
    let checkString = "";
    // start looping through the incoming array.
    // thease two loops will let us target the individual characters in each string.
    for (let j = 0; j < strs.length; j++) {
      // add each incoming character tot he check string.
      checkString += strs[j][i];
    }
    // once the string has been assembled, sort it and compare it to itself
    // if the checkstring is in lexographic order, it will match itself.
    // if it doesn't match, iterate the count.
    if (!(checkString.split("").sort().join("") == checkString)) {
      count += 1;
    }
  }
  // return the count
  return count;
};

console.log(minDeletionSize(["abc", "bce", "cae"])); // 1
console.log(minDeletionSize(["cba", "daf", "ghi"])); // 1
console.log(minDeletionSize(["zyx", "wvu", "tsr"])); // 3
console.log(minDeletionSize(["rrjk", "furt", "guzm"])); // 2;

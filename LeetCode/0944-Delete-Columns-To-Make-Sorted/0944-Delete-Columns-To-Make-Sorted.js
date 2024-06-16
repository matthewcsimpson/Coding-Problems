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

module.exports = minDeletionSize;

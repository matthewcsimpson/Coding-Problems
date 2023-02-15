/**
 * @param {string} s
 * @returns number
 */
function findShort(s) {
  // split the string into an array of its component words
  let a = s.split(" ");

  // sort the array by word length
  a.sort(function (a, b) {
    return a.length - b.length;
  });

  // return the length of the first word in the sorted array
  return a[0].length;
}

module.exports = findShort
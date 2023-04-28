/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let check = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      check.push(arr[i]);
    }
  }
  return check;
};

module.exports = filter;
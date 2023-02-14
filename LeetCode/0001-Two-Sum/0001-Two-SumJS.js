/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // loop through it again to check cominations of nums[k] with nums[i]
    // starting from the same index as the first loop because we don't need to check any
    // combinations more than once.
    for (let k = i + 1; k < nums.length; k++) {
      // if nums[k] & nums[i] equal the target sum, return them as an array.
      if (nums[i] + nums[k] === target) {
        return [i, k];
      }
    }
  }
};

module.exports = twoSum;



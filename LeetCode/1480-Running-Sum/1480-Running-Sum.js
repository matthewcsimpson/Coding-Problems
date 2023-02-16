/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // create a variable to hold the running sum
  let sum = 0;
  // create a new array to hold the running sums.
  let returnNums = [];

  // loop the input array of numbers
  for (let i = 0; i < nums.length; i++) {
    // update the running sum by adding the current number
    sum += nums[i];
    // push the current sum into the holding array
    returnNums.push(sum);
  }
  // return the holding array
  return returnNums;
};

module.exports = runningSum;


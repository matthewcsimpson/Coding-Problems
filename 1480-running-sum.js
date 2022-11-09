// 22-10-04
// 1480. Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;
  let returnNums = [];
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    returnNums.push(sum);
  }
  return returnNums;
};

// let testNums = [7,0,84,78,26,-63,-24,96,-42,15,65,-99,-39,100,84,-38,-95,-33,-69,100,-36,-45,84,-39,61,-77,85,-34,-15,-32,-31,-18,-75,90,-98,-85,39,66];
let testNums = [2, 4, 6, 8, 10];
console.log(runningSum(testNums));

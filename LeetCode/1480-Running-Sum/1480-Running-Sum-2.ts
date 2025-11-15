/**
 * Adding a running total to each index in the array in place.
 * @param nums
 * @returns
 */
const runningSum = (nums: number[]): number[] => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};
const runningSumInPlace = runningSum;
export default runningSum;

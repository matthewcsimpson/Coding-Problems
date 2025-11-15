/**
 * Adding a running total to each index in the array in place using .forEach().
 * @param nums
 * @returns
 */
const runningSum = (nums: number[]): number[] => {
  let total = 0;
  nums.forEach((num, index) => {
    total += num;
    nums[index] = total;
  });
  return nums;
};

const runningSumWithForEach = runningSum;
export default runningSumWithForEach;

/**
 * Adding a running total to each index in the array in place using .forEach().
 * @param nums
 * @returns
 */
const runningSum = (nums: number[]): number[] => {
  let runningTotal = 0;
  nums.forEach((num, index) => {
    runningTotal += num;
    nums[index] = runningTotal;
  });
  return nums;
};

const runningSumWithForEach = runningSum;
export default runningSumWithForEach;

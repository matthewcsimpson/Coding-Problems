/**
 * Adding a running total to each index in the array
 * using recursion.
 * @param nums
 * @returns
 */
const runningSum = (nums: number[]): number[] => {
  const result: number[] = [];

  const helper = (index: number, currentSum: number): void => {
    if (index >= nums.length) return;

    currentSum += nums[index];
    result.push(currentSum);
    helper(index + 1, currentSum);
  };

  helper(0, 0);
  return result;
};

const runningSumWithRecursion = runningSum;
export default runningSumWithRecursion;

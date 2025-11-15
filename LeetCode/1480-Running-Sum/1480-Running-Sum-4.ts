/**
 * Adding a running total to each index in the array in place using .map().
 * @param nums
 * @returns
 */
const runningSum = (nums: number[]): number[] => {
  let total = 0;
  return nums.map((n) => {
    total += n;
    return total;
  });
};

const runningSumWithMap = runningSum;

export default runningSumWithMap;

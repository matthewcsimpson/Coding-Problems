/**
 * Adding a running total to each index in the array in place using .map().
 * @param nums
 * @returns
 */
const runningSum = (nums: number[]): number[] => {
  let runningTotal = 0;
  return nums.map((num) => {
    runningTotal += num;
    return runningTotal;
  });
};

const runningSumWithMap = runningSum;

export default runningSumWithMap;

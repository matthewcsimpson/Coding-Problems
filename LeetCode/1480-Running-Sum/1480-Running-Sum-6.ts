/**
 * Adding a running total to each index in the array using a while loop.
 * @param nums
 * @returns
 */
const runningSum = (nums: number[]): number[] => {
  const result: number[] = [];
  let i = 0;
  let sum = 0;

  while (i < nums.length) {
    sum += nums[i];
    result.push(sum);
    i++;
  }

  return result;
};

const runningSumWithWhile = runningSum;
export default runningSumWithWhile;

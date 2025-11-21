/**
 * Adding a running total to each index in the array.
 * @param nums
 * @returns
 */
const runningSum = (nums: number[]): number[] => {
  const returnNums: number[] = [];
  let runningTotal: number = 0;

  for (let i = 0; i < nums.length; i++) {
    runningTotal += nums[i];
    returnNums.push(runningTotal);
  }

  return returnNums;
};

export default runningSum;

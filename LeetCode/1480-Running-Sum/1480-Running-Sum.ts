/**
 * 
 * @param nums 
 * @returns 
 */
const runningSum = (nums: number[]): number[] => {
  let returnNums: number[] = [];
  let runningTotal: number = 0;
  for (let i = 0; i < nums.length; i++) {
    runningTotal += nums[i];
    returnNums.push(runningTotal);
  }

  return returnNums;

};

const runningSumTS = runningSum;
export default runningSumTS; 



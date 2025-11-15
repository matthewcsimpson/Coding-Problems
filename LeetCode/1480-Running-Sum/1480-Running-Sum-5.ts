/**
 * Adding a running total to each index in the array in place using .reduce().
 * @param nums
 * @returns
 */
const runningSum = (nums: number[]): number[] => {
  // Use reduce to iterate through the array and build the running sum array
  return nums.reduce((acc, num, index) => {
    // For the first element (index 0), use the number itself as the running sum
    // For subsequent elements, add the current number to the previous running sum
    acc[index] = index === 0 ? num : acc[index - 1] + num;
    // Return the accumulator array for the next iteration
    return acc;
  }, [] as number[]); // Initialize accumulator as an empty number array
};

const runningSumWithReducer = runningSum;
export default runningSumWithReducer;

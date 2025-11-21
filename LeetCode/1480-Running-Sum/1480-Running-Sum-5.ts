/**
 * Creates a running sum array where each element contains the sum of all previous elements.
 * Uses reduce to build the result array functionally without mutating the input.
 * @param nums - Array of numbers to calculate running sum for
 * @returns Array where each index contains the cumulative sum up to that position
 */
const runningSum = (nums: number[]): number[] => {
  // Use reduce to iterate through the array and build the running sum array
  return nums.reduce((accumulator: number[], num: number, index: number) => {
    // For the first element (index 0), use the number itself as the running sum
    // For subsequent elements, add the current number to the previous running sum
    accumulator[index] = index === 0 ? num : accumulator[index - 1] + num;
    // Return the updated accumulator array for the next iteration
    return accumulator;
  }, []); // Initialize accumulator as an empty number array
};

const runningSumWithReducer = runningSum;
export default runningSumWithReducer;

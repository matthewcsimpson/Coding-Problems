/**
 * Removes all occurrences of a specific value from an array in-place.
 * @param nums - The array to modify.
 * @param val - The value to remove.
 * @returns The new length of the array after removal.
 */
const removeElement = (nums: number[], val: number): number => {
  // variable to count good elements
  let count = 0;

  // loop the array
  for (let i = 0; i < nums.length; i++) {
    // if the number is the same as the value, replace it with -1
    if (nums[i] === val) {
      nums[i] = -1;
      // otherwise increment the count
    } else {
      count++;
    }
  }
  // sort the list high to low such that the -1 values end up at the end
  nums.sort((a, b) => {
    return b - a;
  });

  //   console.log(nums);
  // return the count
  return count;
};

export default removeElement;

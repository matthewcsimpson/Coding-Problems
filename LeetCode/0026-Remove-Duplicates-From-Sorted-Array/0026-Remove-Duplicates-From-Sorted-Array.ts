/**
 * @param nums
 * @returns number
 */
const removeDuplicates = (nums: number[]): number => {
  // a variable to count the... count
  let count = 0;

  // while the count is less than the length of the nums array...
  while (count < nums.length) {
    // if the current number is the same as the next number..
    if (nums[count] === nums[count + 1]) {
      // splice out the current number
      nums.splice(count, 1);
      // decrement the count
      count--;
    }
    // increment the count
    count++;
  }
  // return the count
  return count;
};

export default removeDuplicates;

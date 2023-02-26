function longestConsecutive(nums: number[]): number {
  // if there are no numbers, return zero immediately.
  if (!nums.length) {
    return 0;
  }
  // sort the numbers.
  nums.sort((a, b) => {
    return a - b;
  });

  // variables to hold the previous number, the current count, and the result we will return. 
  let prev = nums[0];
  let count = 1;
  let result = 1;

  // loop the array, starting at the second number /index 1
  for (let i = 1; i < nums.length; i++) {
    // check this number against the previous number.
    // if it is the same, do nothing.
    if (nums[i] === prev) {
      continue;
    }
    // if the current number is the last number +1, iterate the count.
    if (nums[i] === prev + 1) {
      count++;
      // otherwise reset the count to 1.
    } else {
      count = 1;
    }
    // reset the previous number to be the current number in the next loop.
    prev = nums[i];
    // set the result to be the higher of the current result and current count. 
    result = result > count ? result : count;
  }
  // return the result.
  return result;
}

export default longestConsecutive;


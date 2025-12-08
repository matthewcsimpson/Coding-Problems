/**
 * Given an integer array nums, return true if any
 * value appears at least twice in the array, and
 * return false if every element is distinct.
 * @param nums
 * @returns
 */
const containsDuplicate = (nums: number[]): boolean => {
  const check: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (check.includes(nums[i])) {
      return true;
    } else {
      check.push(nums[i]);
    }
  }
  return false;
};

export default containsDuplicate;

/**
 * Given an integer array nums, return true if any
 * value appears at least twice in the array, and
 * return false if every element is distinct.
 * @param nums
 * @returns
 */
const containsDuplicateDict = (nums: number[]): boolean => {
  const dictionary: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (dictionary.includes(nums[i])) {
      return true;
    } else {
      dictionary.push(nums[i]);
    }
  }
  return false;
};

export default containsDuplicateDict;

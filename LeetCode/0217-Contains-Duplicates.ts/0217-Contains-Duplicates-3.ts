/**
 * Given an integer array nums, return true if any
 * value appears at least twice in the array, and
 * return false if every element is distinct.
 * @param nums
 * @returns
 */
const containsDuplicateSet = (nums: number[]): boolean => {
  const check = new Set<number>();

  for (const value of nums) {
    if (check.has(value)) {
      return true;
    }
    check.add(value);
  }
  return false;
};

export default containsDuplicateSet;

/**
 * Check if the array contains any duplicates within k distance.
 * @param nums
 * @param k
 * @returns
 */
const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  const last = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (last.has(nums[i])) {
      const check = last.get(nums[i]);
      if (check !== undefined && i - check <= k) {
        return true;
      }
    }
    last.set(nums[i], i);
  }
  return false;
};

export default containsNearbyDuplicate;

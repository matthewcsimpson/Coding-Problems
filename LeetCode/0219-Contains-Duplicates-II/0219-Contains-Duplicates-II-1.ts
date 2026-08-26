/**
 * Check if the array contains any duplicates within k distance.
 * @param nums
 * @param k
 * @returns
 */
const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      const check = seen.get(nums[i]);
      if (check !== undefined && i - check <= k) {
        return true;
      }
    }
    seen.set(nums[i], i);
  }
  return false;
};

export default containsNearbyDuplicate;

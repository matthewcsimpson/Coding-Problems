/**
 * Check if the array contains any duplicates within k distance.
 * @param nums
 * @param k
 * @returns
 */
const containsNearbyDuplicateSliding = (nums: number[], k: number): boolean => {
  const window = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    const check = nums[i];

    if (window.has(check)) {
      return true;
    }

    window.add(check);

    if (window.size > k) {
      window.delete(nums[i - k]);
    }
  }

  return false;
};

export default containsNearbyDuplicateSliding;

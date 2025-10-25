const findMissingRanges = (
  nums: number[],
  lower: number,
  upper: number
): number[][] => {
  // Track missing ranges as pairs.
  let missing: number[][] = [];

  // If nums is empty, the entire range is missing.
  if (nums.length === 0) {
    missing.push([lower, upper]);
    return missing;
  }

  // Check for any missing numbers between the lower bound and nums[0].
  if (lower < nums[0]) {
    missing.push([lower, nums[0] - 1]);
  }

  // Check for any missing numbers between successive elements of nums.
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] <= 1) {
      continue;
    }
    missing.push([nums[i] + 1, nums[i + 1] - 1]);
  }

  // Check for any missing numbers between the last element of nums and the upper bound.
  if (upper > nums[nums.length - 1]) {
    missing.push([nums[nums.length - 1] + 1, upper]);
  }

  return missing;
};

export default findMissingRanges;

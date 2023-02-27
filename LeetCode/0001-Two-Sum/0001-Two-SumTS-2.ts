const twoSumTSTwo = (nums: number[], target: number): number[] => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

export default twoSumTSTwo
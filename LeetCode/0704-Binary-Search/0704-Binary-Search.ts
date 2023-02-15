function search(nums: number[], target: number): number {
  let r: number;
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums[i] === target) {
      r = i;
    }
  }

  return r! >= 0 ? r! : -1;
}

export default search;
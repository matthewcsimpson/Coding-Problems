function singleNumber(nums: number[]): number {
  const count = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (count.has(nums[i])) {
      count.delete(nums[i]);
    } else {
      count.add(nums[i]);
    }
  }
  return Array.from(count)[0];
}

export default singleNumber;

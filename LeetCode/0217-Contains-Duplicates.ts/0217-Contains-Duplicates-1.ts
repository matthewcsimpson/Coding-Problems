function containsDuplicate(nums: number[]): boolean {
  const dictionary: number[]  = [];

  for (let i = 0; i < nums.length; i++) {
    if (dictionary.includes(nums[i])) {
      return true;
    } else {
      dictionary.push(nums[i]);
    }
  }
  return false;
}

export default containsDuplicate;

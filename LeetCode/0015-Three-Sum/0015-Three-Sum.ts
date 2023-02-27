function threeSumTS(nums: number[]): number[][] {
  const result: number[][] = [];

  if (nums.length < 3) {
    return result;
  }

  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) {
          j++;
        }
        while (nums[k] === nums[k - 1]) {
          k--;
        }

        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
}

export default threeSumTS;

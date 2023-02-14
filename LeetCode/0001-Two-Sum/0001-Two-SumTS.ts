const twoSumTS = (nums: number[], target: number): number[] => {
  let rnums: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        rnums.push(i);
        rnums.push(j);
      }
    }
  }
  return rnums;
};

module.exports = twoSumTS;

// Tests
console.log(twoSumTS([2, 7, 11, 15], 9));

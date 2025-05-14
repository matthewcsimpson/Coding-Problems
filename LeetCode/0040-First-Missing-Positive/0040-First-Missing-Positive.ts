const firstMissingPositive = (nums: number[]): number => {
  let x = 1;
  nums.forEach((num) => {
    if (num === x) {
      x++;
    }
  });

  return x;
};

export default firstMissingPositive;

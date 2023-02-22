const containsDuplicateTwo = (nums: number[]): boolean => {
  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    if(nums[i]=== nums[i+1])  {
        return true;
    }  
  }
  return false;
};

export default containsDuplicateTwo;
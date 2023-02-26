function productExceptSelf(nums: number[]): number[] {
  // an empty array to hold the result
  const result: number[] = [];
  // a variable to track the current/running product
  let runningProduct: number = 1;

  // Loop through the input array.
  // for each position, the result array should equal the running product.
  // Then, update the running product to be the product of itself and the value at the position.
  for (let i = 0; i < nums.length; i++) {
    result[i] = runningProduct;
    runningProduct *= nums[i];
  }

  // reset the running product back to 1.
  runningProduct = 1;

  // Loop backwards through the array.
  // For each iteration, set the result array to be the product of itself multiplied by the running product.
  // Then, update the running product to be the product of itself and the value at that position.
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= runningProduct;
    runningProduct *= nums[i];

    // this extra step is to get past JEST. 
    if (result[i] === -0) {
      result[i] = 0;
    }
  }
  return result;
}

export default productExceptSelf;

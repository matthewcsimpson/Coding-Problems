function trap(height: number[]): number {
  // variables to hold values we ned to track.
  let totalWater = 0;
  let left = 0,
    right = height.length - 1;
  let leftheight = 0,
    rightheight = 0;

  // start looping the array, from the outside in.
  while (left < right) {
    // if the current height on the left is less than on the right, then...
    if (height[left] < height[right]) {
      // if the current height on the left is greater than the stored left height,
      // reset the stored left height with the current height.
      if (height[left] > leftheight) {
        leftheight = height[left];
        // otherwise, caculate the stored left height - the current height
        // and add it to the total
      } else {
        totalWater += leftheight - height[left];
      }
      // increment the left index up.
      left++;
    } else {
      // if the current right height is greater than the stored right height
      // reset the stored right height with the current height
      if (height[right] > rightheight) {
        rightheight = height[right];
        // otherwise calculate the stored right height - the current right height
        // and add that to the total
      } else {
        totalWater += rightheight - height[right];
      }
      // decrement the right counter.
      right--;
    }
  }
  // return the total
  return totalWater;
}

export default trap;
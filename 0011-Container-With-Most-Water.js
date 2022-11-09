// You are given an integer array height of length n. There are n vertical lines drawn
// such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the
// container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // establish variable for max area.
  let maxArea = 0;
  // count starting from the left side
  let i = 0;
  // count starting from the right side
  let j = height.length - 1;

  // while the left count is less than the right count, do the work.
  while (i < j) {
    // max area is the larger of maxArea, or the area calculated
    // caculated area is the height of the shorter of the two vertical lines
    // multiplied by the difference in their indexes
    maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
    // if the left height is smaller, incriment the left count.
    if (height[i] < height[j]) {
      i++;
      // is the right height is smaller, decrement the right count.
      // Eventually the counts will meet at a mid point.
    } else {
      j--;
    }
  }

  // return the max area, which should be the largest of the calculated areas.
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));

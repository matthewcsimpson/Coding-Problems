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

module.exports = maxArea;


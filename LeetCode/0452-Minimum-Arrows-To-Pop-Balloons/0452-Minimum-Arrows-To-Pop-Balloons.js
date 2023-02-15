// There are some spherical balloons taped onto a flat wall that
// represents the XY-plane. The balloons are represented as a 2D
// integer array points where points[i] = [xstart, xend] denotes a
// balloon whose horizontal diameter stretches between xstart and xend.
// You do not know the exact y-coordinates of the balloons.

// Arrows can be shot up directly vertically (in the positive y-direction)
// from different points along the x-axis. A balloon with xstart and xend is
// burst by an arrow shot at x if xstart <= x <= xend. There is no limit to
// the number of arrows that can be shot. A shot arrow keeps traveling up infinitely,
// bursting any balloons in its path.

// Given the array points, return the minimum number of arrows that must be shot
// to burst all balloons.

// Example 1:
// Input: points = [[10,16],[2,8],[1,6],[7,12]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
// - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].

// Example 2:
// Input: points = [[1,2],[3,4],[5,6],[7,8]]
// Output: 4
// Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.

// Example 3:
// Input: points = [[1,2],[2,3],[3,4],[4,5]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
// - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].

// Constraints:
// 1 <= points.length <= 105
// points[i].length == 2
// -231 <= xstart < xend <= 231 - 1

/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = (points) => {
  // sort the balloos to make overlap easier to consider.
  // sorted  by their left edges.
  points.sort((a, b) => {
    return a[0] - b[0];
  });
  // variable to count the arrows.  Starting at one since we will need at least one.
  let count = 1;
  // keep track of the current rigth hand edge.
  let currentRight = points[0][1];

  //   console.log(points);
  // loop the array
  for (let i = 0; i < points.length; i++) {
    // if the current balloon (points[i]) left edge (points[i][0] is larger than
    // the currently tracked right edge (currentRight = points[x][1]))
    // then we will need another arrow.
    if (points[i][0] > currentRight) {
      count++;
      currentRight = points[i][1];
      //   console.log(currentRight, i);
    }

    // if the current right edge is smaller than the tracked right edge,
    // then we need to reset the right edge.
    if (points[i][1] < currentRight) {
      currentRight = points[i][1];
      //   console.log(currentRight, i);
    }
  }

  return count;
};

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
); // 2

console.log(
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
); // 4

console.log(
  findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ])
); // 2

console.log(
  findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8],
  ])
);

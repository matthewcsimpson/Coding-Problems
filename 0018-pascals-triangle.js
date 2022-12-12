// 118. Pascal's Triangle
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// [
//     [1],
//     [1,1],
//     [1,2,1],
//     [1,3,3,1],
//     [1,4,6,4,1]
// ]

// Example 2:

// Input: numRows = 1
// Output: [[1]]

// Constraints:

// 1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // make a new array
  let triangle = [];
  // start a loop that loops the specified number of times (numRows)
  for (let i = 0; i < numRows; i++) {
    // make an array for row i in the triangle, at the next size up.
    triangle[i] = new Array(i + 1);
    // the first and last items in each row will always be 1, so fill them with 1s.
    triangle[i][0] = 1;
    triangle[i][i] = 1;

    // loop the current row (exclusding the first and last element)
    // and fill the middle values with the sums of the values directly above.
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }

  // return the completed array of arrays
  return triangle;
};

console.log(generate(5));

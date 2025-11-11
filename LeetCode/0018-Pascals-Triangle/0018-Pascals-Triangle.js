/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generatePascalsTriangle = function (numRows) {
  // Create a new array
  let triangle = [];

  // Start a loop that iterates the specified number of times (numRows)
  for (let i = 0; i < numRows; i++) {
    // Create an array for the current row (i) in the triangle, with one more element than the previous row.
    triangle[i] = new Array(i + 1);

    // The first and last items in each row will always be 1, so fill them with 1s
    triangle[i][0] = 1;
    triangle[i][i] = 1;

    // Loop through the current row (excluding the first and last element)
    // and fill the middle values with the sums of the values directly above
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }

  // Return the completed array of arrays
  return triangle;
};

module.exports = generatePascalsTriangle;

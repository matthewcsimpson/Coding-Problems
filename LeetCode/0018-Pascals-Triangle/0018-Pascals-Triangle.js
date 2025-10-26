/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generatePascalsTriangle = function (numRows) {
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

module.exports = generatePascalsTriangle;



/**
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 *
 * @param {array} arr
 */
const diagonalDifference = (arr) => {
  // create starting points for the summing.
  let sumBackSlash = 0;
  let sumForwardSlash = 0;

  // loop through the input array[][].
  for (let i = 0; i < arr.length; i++) {
    // in the loop, take the first element of the first array,
    // second of the second, etc.
    sumBackSlash += arr[i][i];
    // in the loop take the last elemtn of the first array,
    // second to last of the second, etc.
    sumForwardSlash += arr[i][arr.length - 1 - i];
  }

  // return the absolute value of the difference between the two diagonals.
  return Math.abs(sumBackSlash - sumForwardSlash);
};

module.exports = diagonalDifference;


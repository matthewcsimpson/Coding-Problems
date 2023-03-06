

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

let array1 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

let array2 = [
  [6, 8],
  [-6, 9],
];

let array3 = [
  [6, 6, 7, -10, 9, -3, 8, 9, -1],
  [9, 7, -10, 6, 4, 1, 6, 1, 1],
  [-1, -2, 4, -6, 1, -4, -6, 3, 9],
  [-8, 7, 6, -1, -6, -6, 6, -7, 2],
  [-10, -4, 9, 1, -7, 8, -5, 3, -5],
  [-8, -3, -4, 2, -3, 7, -5, 1, -5],
  [-2, -7, -4, 8, 3, -1, 8, 2, 3],
  [-3, 4, 6, -7, -7, -8, -3, 9, -6],
  [-2, 0, 5, 4, 4, 4, -3, 3, 0],
];
console.log(diagonalDifference(array1)); // 15
console.log(diagonalDifference(array2)); // 13
console.log(diagonalDifference(array3)); // 52

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
// Function description
// Complete the  function in the editor below.
// diagonalDifference takes the following parameter:
// int arr[n][m]: an array of integers
// Return
// int: the absolute diagonal difference
// Input Format
// The first line contains a single integer, , the number of rows and columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .
// Constraints

// Output Format
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
// Sample Input
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output
// 15
// Explanation
// The primary diagonal is:
// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4
// The secondary diagonal is:
//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15
// Note: |x| is the absolute value of x

/**
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 *
 * @param {array} arr
 */
const diagonalDifference = (arr) => {
  let sumFore = 0;
  let sumBack = 0;
  let checkLength = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    sumFore += arr[i][i];
    sumBack += arr[i][checkLength];
    checkLength--;
  }

  return Math.abs(sumFore - sumBack);
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

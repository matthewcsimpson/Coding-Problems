// Given five positive integers, find the minimum and maximum values that can be
// calculated by summing exactly four of the five integers. Then print the respective
// minimum and maximum values as a single line of two space-separated long integers.
// Example

// The minimum sum is  and the maximum sum is . The function prints
// 16 24
// Function Description
// Complete the miniMaxSum function in the editor below.
// miniMaxSum has the following parameter(s):
// arr: an array of  integers
// Print
// Print two space-separated integers on one line: the minimum sum and the maximum sum of
// of elements.

// Input Format
// A single line of five space-separated integers.
// Constraints

// Output Format
// Print two space-separated long integers denoting the respective minimum and
// maximum values that can be calculated by summing exactly four of the five integers.
// (The output can be greater than a 32 bit integer.)
// Sample Input
// 1 2 3 4 5
// Sample Output
// 10 14
// Explanation
// The numbers are , , , , and . Calculate the following sums using four of the five integers:
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Hints: Beware of integer overflow! Use 64-bit Integer.

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let biggest = 0;
  let smallest = Number.MAX_SAFE_INTEGER;

  for (let j = 0; j < arr.length; j++) {
    if (sum - arr[j] > biggest) {
      biggest = sum - arr[j];
    }
    if (sum - arr[j] < smallest) {
      smallest = sum - arr[j];
    }
  }
  console.log(smallest + " " + biggest);
}

console.log(miniMaxSum([1, 2, 3, 4, 5])); // expected 10 14
console.log(miniMaxSum([7, 69, 2, 221, 8974])); // expected 299 9271
// [1, 2, 3, 4, 5];
// [7, 69, 2, 221, 8974];
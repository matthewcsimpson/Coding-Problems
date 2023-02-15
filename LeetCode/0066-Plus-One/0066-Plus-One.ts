// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer. The digits are
// ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// Constraints:
// - 1 <= digits.length <= 100
// - 0 <= digits[i] <= 9
// - digits does not contain any leading 0's.

const plusOne = (digits: number[]): number[] => {
  // variable to add to the number at each index.
  let plus = 1;

  // loop the array backward
  for (let i = digits.length - 1; i > -1; i--) {
    // variable to hold what will be the new, incremented number aat each index.
    let newnum = digits[i] + plus;
    // if the newnum is 10 or more, then make the current number the new number,
    // less 10, and make the plus number 1.
    if (newnum > 9) {
      digits[i] = newnum - 10;
      plus = 1;
      // otherwise, make the current number the new number and make the plus number 0
    } else {
      digits[i] = newnum;
      plus = 0;
    }
  }

  // if the plus number is still 1, then unshift it to the start of the array
  if (plus === 1) {
    digits.unshift(plus);
  }
  // return the array
  return digits;
};

// Tests
console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]

/**
 * Recursive
 * @param {number} num
 * @returns number
 */
function persistence(num) {
  // if the number is only one digit, return zero because we can't proceed.
  // This will also be our exit condition from the recursive function.
  if (num.toString().length === 1) {
    return 0;
  }

  // variable to keep track of what we are multiplying.
  let multiplier = 1;

  // split the input number into an array of its digits.
  // Converting to a string because split is not a function for Numbers.
  let numbers = num.toString().split("");
  // loop that array
  for (let i = 0; i < numbers.length; i++) {
    // multiply the multiplier by the current number.
    // eg for the input number 39 the multiplier will become 3 (1*3) and then 27 (3*9)
    // on the first pass.
    // we must use parseInt because it was previously converted to a string.
    multiplier *= parseInt(numbers[i]);
  }

  // recursivly return the function, passing in the current multiplier, plus one.
  return persistence(multiplier) + 1;
}

module.exports = persistence;

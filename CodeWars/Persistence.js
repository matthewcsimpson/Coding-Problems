// Write a function, persistence, that takes in a positive parameter num and returns
// its multiplicative persistence, which is the number of times you must multiply the
// digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  // if the number is only one digit, return zero because we can't proceed.
  // This will also be our exit condition from the recursive function.
  if (num.toString().length === 1) {
    console.log(num);
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

console.log(persistence(4));
console.log(persistence(39));
console.log(persistence(25));
console.log(persistence(999));

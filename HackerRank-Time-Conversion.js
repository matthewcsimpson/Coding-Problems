// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Example

// s = '12:01:00PM'
// Return '12:01:00'.

// s = '12:01:00AM'
// Return '00:01:00'.

// Function Description
// Complete the timeConversion function in the editor below. It should return a new string
// representing the input time in 24 hour format.

// timeConversion has the following parameter(s):
// - string s: a time in  hour format
// Returns
// - string: the time in  hour format

// Input Format
// A single string  that represents a time in -hour clock format (i.e.:  or ).
// Constraints
// All input times are valid

// Sample Input
// 07:05:45PM

// Sample Output
// 19:05:45

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

/**
 * Converts a well formed incoming string representing the
 * time in 12hr format to 24hr format.
 * @param {string} s
 * @returns string
 */
function timeConversion(s) {
  const split = s.split(":");
  const am = split[2][2] === "A" ? true : false;

  if (am && parseInt(split[0]) === 12) {
    split[0] = "00";
  } else if (!am && parseInt(split[0]) !== 12) {
    split[0] = parseInt(split[0]) + 12;
  }

  split[2] = split[2].slice(0, 2);

  return split.join(":");
}

console.log(timeConversion("11:01:00PM"));
console.log(timeConversion("10:01:00PM"));
console.log(timeConversion("09:01:00PM"));
console.log(timeConversion("08:01:00PM"));
console.log(timeConversion("07:01:00AM"));
console.log(timeConversion("12:01:00PM"));
console.log(timeConversion("12:01:00AM"));

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

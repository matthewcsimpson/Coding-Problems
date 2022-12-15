// In a factory a printer prints labels for boxes. For one kind of boxes the printer
// has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good"
// control string would be aaabbbbhaijjjm meaning that the printer used three times color a,
// four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control
// string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error
// rate of the printer as a string representing a rational whose numerator is the number
// of errors and the denominator the length of the control string. Don't reduce this fraction
// to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:

// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

/**
 *
 * @param {string} s
 * @returns string
 */
function printerError(s) {
  // check the string for characters between n and z, case insensitive.
  let matches = s.match(/[N-Z]/gi);

  // if there are no matches, set matches to be an empty array (so that the length is 0)
  if (!matches) {
    matches = [];
  }

  // return a string of the length of the matches array / the length of the input string
  return `${matches.length}/${s.length}`;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
console.log(
  printerError("kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
console.log(
  printerError(
    "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"
  )
);
console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm")
);
console.log(
  printerError("lkjsdlkhaaaaaaajkjzzzzzzzsssssjhdfcccccclkasdfjdbbbbbbb")
);

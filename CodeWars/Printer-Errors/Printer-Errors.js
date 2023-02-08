
/**
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

// Tests 
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

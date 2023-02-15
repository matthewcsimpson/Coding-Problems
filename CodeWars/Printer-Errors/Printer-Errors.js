
/**
 * @param {string} s
 * @returns string
 */
const printerError = (s) =>{
  // check the string for characters between n and z, case insensitive.
  let matches = s.match(/[N-Z]/gi);

  // if there are no matches, set matches to be an empty array (so that the length is 0)
  if (!matches) {
    matches = [];
  }

  // return a string of the length of the matches array / the length of the input string
  return `${matches.length}/${s.length}`;
}

module.exports= printerError



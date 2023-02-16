/**
 * @param {string} s
 * @return {character} 
 */
const repeatedCharacter = (s) => {
  // split the string into an array
  let array = s.split("");
  // new array to store characters
  let repeatedchar = [];

  // loop the array
  for (let i = 0; i < array.length; i++) {
    // if the repeatedChar array does not contain the current chracter,
    // push the current character into the repeatedChar array.
    if (!repeatedchar.includes(array[i])) {
      repeatedchar.push(array[i]);
      // if the repeatedChar array does contain the current character,
      // return the current character.
    } else {
      return array[i];
    }
  }
};

module.exports = repeatedCharacter;
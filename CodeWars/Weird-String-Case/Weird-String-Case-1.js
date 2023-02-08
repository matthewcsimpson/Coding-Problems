/**
 * Function with only one loop
 * @param {string} string
 * @returns string
 */
const toWeirdCase = (string) => {
  // split the string into letters
  const letters = string.split("");
  // keep track of if a letter is even or odd.
  let evenOdd = 0;

  // loop the array
  for (let i = 0; i < letters.length; i++) {
    // if the letter is a space, reset the evenOdd to 1 (so the next value will be even)
    if (letters[i] === " ") {
      evenOdd = 1;
      // if the current letter is even make it uppercase
    } else if (evenOdd % 2 === 0) {
      letters[i] = letters[i].toUpperCase();
      // otherwise, make the letter lowercase
    } else {
      letters[i] = letters[i].toLowerCase();
    }
    evenOdd++;
  }
  return letters.join("");
};

// Tests
console.log(toWeirdCase("Weird string case"));
console.log(toWeirdCase("String"));
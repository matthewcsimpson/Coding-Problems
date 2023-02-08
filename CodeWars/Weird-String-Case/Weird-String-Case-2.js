/**
 * Function solved with nested .map()s
 * @param {string} string
 * @returns string
 */
const toWeirdCase2 = (string) => {
    // split the string into words.
    return (
      string
        .split(" ")
        // map over the words and return an individual word
        .map(function (word) {
          return (
            word
              // split the word into letters
              .split("")
              // map over the letters and track the index of each
              .map(function (letter, index) {
                // if the index is even, uppercase the letter.
                // otherwise make it lowercase
                return index % 2 == 0
                  ? letter.toUpperCase()
                  : letter.toLowerCase();
              })
              // join the letters back into a word
              .join("")
          );
        })
        // join the words back into a string
        .join(" ")
    );
  };
  
  // Tests
  console.log(toWeirdCase2("Weird string case"));
  console.log(toWeirdCase2("String"));
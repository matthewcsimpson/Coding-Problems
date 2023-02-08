/**
 * @param {string} s
 * @returns number
 */
function findShort(s) {
  // split the string into an array of its component words
  let a = s.split(" ");

  // sort the array by word length
  a.sort(function (a, b) {
    return a.length - b.length;
  });

  // return the length of the first word in the sorted array
  return a[0].length;
}

// Tests
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(findShort("Let's travel abroad shall we"));

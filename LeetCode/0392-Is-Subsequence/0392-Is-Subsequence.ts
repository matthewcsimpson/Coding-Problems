/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequenceTS = (s: string, t: string): boolean => {
  // if the shorter string is longer, it can't be a substring can it?
  if (s.length > t.length) {
    return false;
  }

  // split strings into arrays, add an empty array, and a counter for it.
  let ss: string[] = s.split("");
  let tt: string[] = t.split("");
  let check: string[] = [];
  let subIndex: number = 0;

  // loop the longer string/array.
  // If the character inthe longer array is the same as the specified
  // character in the short array, then add it to the empty array and incement the counter.
  for (let i = 0; i < tt.length; i++) {
    if (tt[i] === ss[subIndex]) {
      check.push(tt[i]);
      subIndex++;
    }
  }
  // Now if the empty/check array is the same length as the shorter string, the answer should work.
  return ss.length === check.length;
};

let five = "abc";
let six = "ahbkcd";
let seven = "ghi";
let eight = "abcdefghijklmnopqrstuvwxyz";

console.log(isSubsequenceTS(five, six));
console.log(isSubsequenceTS(seven, eight));

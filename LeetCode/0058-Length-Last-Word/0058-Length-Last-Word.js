/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWordJs = function (s) {
  // trim any whitespaces from the incoming string.
  let st = s.trim();

  // split the trimmed string into its component words.
  let ss = st.split(" ");

  // return the length of the last word in that array.
  return ss[ss.length - 1].length;
};


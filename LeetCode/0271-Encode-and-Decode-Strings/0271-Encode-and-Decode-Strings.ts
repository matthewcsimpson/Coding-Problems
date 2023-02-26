const JOINER = "JOIN";

/**
 * Encodes a list of strings to a single string.
 */
function encode(strs) {
  let joined = strs.join(JOINER);
  return joined;
}

/**
 * Decodes a single string to a list of strings.
 */
function decode(s) {
  return s.split(JOINER);
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

export { encode, decode };

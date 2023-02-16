/**
 * 
 * @param nums - an array of numbers
 * @returns number
 */
const findTheArrayConcVal = (nums: number[]): number => {
  // Variable to track the concatenated value
  let cv = 0;
  // Loop while the length of the array is ... an actual length.
  while (nums.length > 0) {
    // if the length is more than 1, then concatenate the first and last value,
    // and add them to the concatenated value
    if (nums.length > 1) {
      cv += parseInt(`${nums.shift()}` + `${nums.pop()}`);
    }
    // if the length is 1, add the only remaining value.
    if (nums.length === 1) {
      cv += nums.shift() || 0;
    }
  }

  // return the concatenated value.
  return cv;
};

export default findTheArrayConcVal;

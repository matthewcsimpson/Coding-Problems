/**
 * @param n
 * @returns
 */
const confusingNumberII = (n: number): number => {
  let possibles = [0, 1, 6, 8, 9];
  let count = 0;

  // inline fucntion will be called recursively
  const backtrack = (string: string): void => {
    // we need a number and the incoming arguemnt is a string
    let parse_num = parseInt(string);
    if (
      string.startsWith("0") ||
      string.length > n.toString().length ||
      parse_num > n
    ) {
      return;
    }
    if (string != "" && isValid(parse_num)) {
      count++;
    }
    for (let possible of possibles) {
      backtrack(string + possible);
    }
  };

  backtrack("");
  return count;
};

// helper function
const isValid = (num: number): boolean => {
  let valid = {
    0: 0,
    1: 1,
    6: 9,
    8: 8,
    9: 6,
  };
  let newNum = "";
  for (let d of num.toString()) {
    newNum = valid[d] + newNum;
  }
  return parseInt(newNum) != num;
};

export default confusingNumberII



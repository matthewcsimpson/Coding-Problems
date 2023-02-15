/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let answer = parseInt(x.toString().split("").reverse().join("").toString());

  if (answer < Math.pow(2, 31) * -1 || answer > Math.pow(2, 31) - 1) {
    return 0;
  }

  return x < 0 ? answer * -1 : answer;
};

module.exports = reverse;


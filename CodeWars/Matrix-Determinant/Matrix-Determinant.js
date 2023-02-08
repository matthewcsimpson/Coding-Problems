/**
 * @param {Number[][]} m 
 * @returns Number
 */
const determinant = (m) => {
  if (m.length === 1) {
    return m[0][0];
  }
  if (m.length === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }
  if (m.length > 2) {
    return (r = m[0].reduce((acc, value, index) => {
      return (
        acc +
        (-1) ** (index + 2) *
          value *
          determinant(
            m.slice(1).map((c) => {
              return c.filter((_element, jndex) => index != jndex);
            })
          )
      );
    }, 0));
  }
};

const m1 = [[3]];
const m2 = [
  [4, 6],
  [3, 8],
];
const m3 = [
  [2, 4, 2],
  [3, 1, 1],
  [1, 2, 0],
];
const m4 = [
  [2, 4, 2, 4],
  [3, 1, 1, 3],
  [1, 2, 0, 1],
  [4, 5, 6, 7],
];

console.log(determinant(m1)); // 3
console.log(determinant(m2)); // 14
console.log(determinant(m3)); // 10
console.log(determinant(m4)); // 10

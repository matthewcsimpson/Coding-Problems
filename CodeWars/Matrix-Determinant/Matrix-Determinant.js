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
    return (m[0].reduce((acc, value, index) => {
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

module.exports = determinant;


function flippingMatrix(matrix) {
  let length = matrix.length / 2;
  let max = 0;
  let total = 0;

  for (let row = 0; row < length; row++) {
    for (let column = 0; column < length; column++) {
      max = Number.MIN_VALUE;
      max = Math.max(matrix[row][column], max);
      max = Math.max(matrix[row][2 * length - column - 1], max);
      max = Math.max(matrix[2 * length - row - 1][column], max);
      max = Math.max(
        matrix[2 * length - row - 1][2 * length - column - 1],
        max
      );
      total += max;
    }
  }
  return total;
}

module.exports = flippingMatrix



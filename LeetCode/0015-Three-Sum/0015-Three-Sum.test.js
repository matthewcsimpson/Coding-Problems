const threeSum = require("./0015-Three-Sum");

test("0015-Three-Sum", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
  expect(threeSum([0, 1, 1])).toStrictEqual([]);
  expect(threeSum([0, 0, 0])).toStrictEqual([[0, 0, 0]]);
});

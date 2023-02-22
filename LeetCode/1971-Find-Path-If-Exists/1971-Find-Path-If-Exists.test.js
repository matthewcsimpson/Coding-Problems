const validPath = require("./1971-Find-Path-If-Exists");

test("1971-Find-Path-If-Exists", () => {
  expect(
    validPath(
      3,
      [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      0,
      2
    )
  ).toBe(true);
  expect(
    validPath(
      6,
      [
        [0, 1],
        [0, 2],
        [3, 5],
        [5, 4],
        [4, 3],
      ],
      0,
      5
    )
  ).toBe(false);
});

const processData = require("./Zig-Zag");

test("Zig-Zag Sequence", () => {
  expect(processData([1, 2, 3, 4, 5, 6, 7])).toStrictEqual([
    1, 2, 3, 7, 6, 5, 4,
  ]);
  expect(processData([2, 5, 6, 7, 8, 9, 10, 11, 23])).toStrictEqual([
    2, 5, 6, 7, 23, 11, 10, 9, 8,
  ]);
});



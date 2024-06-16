const minDeletionSize = require("./0944-Delete-Columns-To-Make-Sorted");

test("0944-Delete-Columns-To-Make-Sorted.test", () => {
  expect(minDeletionSize(["abc", "bce", "cae"])).toBe(1);
  expect(minDeletionSize(["cba", "daf", "ghi"])).toBe(1);
  expect(minDeletionSize(["zyx", "wvu", "tsr"])).toBe(3);
  expect(minDeletionSize(["rrjk", "furt", "guzm"])).toBe(2);
});


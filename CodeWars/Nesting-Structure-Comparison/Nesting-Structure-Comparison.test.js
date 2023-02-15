const sameStructureAs = require("./Nesting-Structure-Comparison");

test("Nesting-Structure-Comparison", () => {
  expect(sameStructureAs([1, 1, 1], [2, 2, 2])).toBe(true);
});

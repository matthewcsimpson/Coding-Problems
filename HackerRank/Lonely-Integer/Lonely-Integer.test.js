const lonelyInteger = require("./Lonely-Integer");

test("Lonely Integer", () => {
  expect(lonelyInteger([0, 0, 1, 2, 1])).toBe(2);
  expect(lonelyInteger([1, 2, 3, 4, 3, 2, 1])).toBe(4);
  expect(lonelyInteger([1, 1, 2])).toBe(2);
  expect(lonelyInteger([1])).toBe(1);
});

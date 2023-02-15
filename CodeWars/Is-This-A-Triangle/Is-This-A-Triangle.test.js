const isTriangle = require("./Is-This-A-Triangle");

test("Is-This-A-Triangle", () => {
  expect(isTriangle(1, 2, 2)).toBe(true);
  expect(isTriangle(7, 2, 2)).toBe(false);
  expect(isTriangle(5, 1, 2)).toBe(false);
  expect(isTriangle(1, 2, -3)).toBe(false);
  expect(isTriangle(4, 2, 3)).toBe(true);
});

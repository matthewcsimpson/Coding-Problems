const reverse = require("./0007-Reverse-Integer");

test("0007-Reverse-Integer", () => {
  expect(reverse(123)).toBe(321);
  expect(reverse(-123)).toBe(-321);
  expect(reverse(Math.pow(2, 29))).toBe(219078635);
});



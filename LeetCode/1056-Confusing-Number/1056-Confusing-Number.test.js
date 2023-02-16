const confusingNumber = require("./1056-Confusing-Number");

test("1056-Confusing-Number", () => {
  expect(confusingNumber(6)).toBe(true);
  expect(confusingNumber(9)).toBe(true);
  expect(confusingNumber(0)).toBe(false);
  expect(confusingNumber(68)).toBe(true);
  expect(confusingNumber(11)).toBe(false);
  expect(confusingNumber(1234)).toBe(false);
  expect(confusingNumber(168990)).toBe(true);
  expect(confusingNumber(8)).toBe(false);
});

const minimumRounds = require("./2244-Minimum-Rounds-To-Complete-All-Tasks");

test("2244-Minimum-Rounds-To-Complete-All-Tasks", () => {
  expect(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4])).toBe(4);
  expect(minimumRounds([2, 3, 3])).toBe(-1);
});

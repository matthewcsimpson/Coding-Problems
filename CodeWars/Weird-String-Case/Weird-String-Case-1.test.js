const toWeirdCase = require("./Weird-String-Case-1");

test("Weird-String-Case-1", () => {
  expect(toWeirdCase("Weird string case")).toBe("WeIrD StRiNg CaSe");
  expect(toWeirdCase("String")).toBe("StRiNg");
});


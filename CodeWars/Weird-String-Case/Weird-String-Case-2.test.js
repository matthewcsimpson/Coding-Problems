const toWeirdCaseTwo = require("./Weird-String-Case-2");

test("Weird-String-Case-2", () => {
    expect(toWeirdCaseTwo("Weird string case")).toBe("WeIrD StRiNg CaSe");
    expect(toWeirdCaseTwo("String")).toBe("StRiNg");
  });
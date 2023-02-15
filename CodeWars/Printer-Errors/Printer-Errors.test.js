const printerError = require("./Printer-Errors");

test("Printer-Errors", () => {
  expect(printerError(log1)).toBe("3/56");
  expect(printerError(log1)).not.toBe(!"3/56");
  expect(printerError(log2)).toBe("6/60");
  expect(printerError(log3)).toBe("11/65");
  expect(printerError(log4)).toBe("0/53");
  expect(printerError(log5)).toBe("14/55");
});

// Test Data
let log1 = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
let log2 = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
let log3 = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu";
let log4 = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm";
let log5 = "lkjsdlkhaaaaaaajkjzzzzzzzsssssjhdfcccccclkasdfjdbbbbbbb";

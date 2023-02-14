const intToRoman = require("./0012-Integer-To-Roman");

test("0012-Integer-To-Roman", () => {
  expect(intToRoman(3467)).toStrictEqual("MMMCDLXVII");
  expect(intToRoman(3)).toStrictEqual("III");
  expect(intToRoman(25)).toStrictEqual("XXV");
  expect(intToRoman(1994)).toStrictEqual("MCMXCIV");
});

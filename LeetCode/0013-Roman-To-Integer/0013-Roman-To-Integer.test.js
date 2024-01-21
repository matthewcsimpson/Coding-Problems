const romanToInt = require("./0013-Roman-To-Integer");

test("0013-Roman-To-Integer", () => {
  expect(romanToInt("MMMCDLXVII")).toStrictEqual(3467);
  expect(romanToInt("MCMXCIV")).toStrictEqual(1994);
  expect(romanToInt("III")).toStrictEqual(3);
  expect(romanToInt("XXV")).toStrictEqual(25);
  expect(romanToInt("XIX")).toStrictEqual(19);
  expect(romanToInt("XL")).toStrictEqual(40);

});

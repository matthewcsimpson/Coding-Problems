const myAtoi2 = require("./0008-String-to-Integer-(atoi)-2");

test("0008-String-to-Integer-(atoi)-1", () => {
  expect(myAtoi2("42")).toBe(42);
  expect(myAtoi2("   -42")).toBe(-42);
  expect(myAtoi2("4193 with words")).toBe(4193);
  expect(myAtoi2("words and 987")).toBe(0);
  expect(myAtoi2("-91283472332")).toBe(-2147483648);
  expect(myAtoi2("3.14159")).toBe(3);
  expect(myAtoi2(".1")).toBe(0);
  expect(myAtoi2("21474836460")).toBe(2147483647);
});

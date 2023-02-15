const myAtoi = require("./0008-String-to-Integer-(atoi)-1");

test("0008-String-to-Integer-(atoi)-1", () => {
  expect(myAtoi("42")).toBe(42);
  expect(myAtoi("   -42")).toBe(-42);
  expect(myAtoi("4193 with words")).toBe(4193);
  expect(myAtoi("words and 987")).toBe(0);
  expect(myAtoi("-91283472332")).toBe(-2147483648);
  expect(myAtoi("3.14159")).toBe(3);
  expect(myAtoi(".1")).toBe(0);
  expect(myAtoi("21474836460")).toBe(2147483647);
});

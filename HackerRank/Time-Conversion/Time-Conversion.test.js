const timeConversion = require("./Time-Conversion");

test("Time-Conversion", () => {
  expect(timeConversion("11:01:00PM")).toBe("23:01:00");
  expect(timeConversion("10:01:00PM")).toBe("22:01:00");
  expect(timeConversion("09:01:00PM")).toBe("21:01:00");
  expect(timeConversion("08:01:00PM")).toBe("20:01:00");
  expect(timeConversion("07:01:00AM")).toBe("07:01:00");
  expect(timeConversion("12:01:00PM")).toBe("12:01:00");
  expect(timeConversion("12:01:00AM")).toBe("00:01:00");
});

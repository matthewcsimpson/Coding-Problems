const isPrime = require("./Is-A-Number-Prime");

test("Is-A-Number-Prime", () => {
  expect(isPrime(0)).toBe(false);
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(73)).toBe(true);
  expect(isPrime(75)).toBe(false);
  expect(isPrime(-1)).toBe(false);
});

const miniMaxSumJS = require("./MiniMaxSum");

test("Mini-Max Sum JS", () => {
  expect(miniMaxSumJS([1, 2, 3, 4, 5])).toBe("10, 14");
  expect(miniMaxSumJS([7, 69, 2, 221, 8974])).toBe("299, 9271");
});
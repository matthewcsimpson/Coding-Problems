const maxProfit = require("./0121-Best-Time-to-Buy-and-Sell-Stock");

test("0121-Best-Time-to-Buy-and-Sell-Stock", () => {
  expect(maxProfit([3, 2, 6, 5, 0, 3])).toBe(4);
  expect(maxProfit([8, 12, 6, 5, 80, 4, 100])).toBe(96);
  expect(maxProfit([7,6,4,3,1])).toBe(0)
});

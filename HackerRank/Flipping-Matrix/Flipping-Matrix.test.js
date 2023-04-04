const flippingMatrix = require("./Flipping-Matrix");

// Test Data
let b = [
  [1, 2, 3, 11, 15, 19],
  [4, 5, 7, 12, 16, 20],
  [8, 9, 10, 13, 17, 21],
  [8, 9, 10, 14, 18, 22],
  [8, 9, 10, 14, 18, 22],
  [8, 9, 10, 14, 18, 22],
];

// Test 
test("Flipping the Matrix", () => {
  expect(flippingMatrix(b)).toBe(162);
});

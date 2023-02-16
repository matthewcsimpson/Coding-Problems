const runningSum = require("./1480-Running-Sum");

test("1480-Running-Sum JS", () => {
  expect(runningSum(testNums1)).toStrictEqual(result1);
  expect(runningSum(testNums2)).toStrictEqual(result2);
});

// Test Arrays
let testNums1 = [
  7, 0, 84, 78, 26, -63, -24, 96, -42, 15, 65, -99, -39, 100, 84, -38, -95, -33,
  -69, 100, -36, -45, 84, -39, 61, -77, 85, -34, -15, -32, -31, -18, -75, 90,
  -98, -85, 39, 66,
];
let testNums2 = [2, 4, 6, 8, 10];

// Array Running Sums
let result1 = [
  7, 7, 91, 169, 195, 132, 108, 204, 162, 177, 242, 143, 104, 204, 288, 250,
  155, 122, 53, 153, 117, 72, 156, 117, 178, 101, 186, 152, 137, 105, 74, 56,
  -19, 71, -27, -112, -73, -7,
];
let result2 = [2, 6, 12, 20, 30];

import { expect, test } from "@jest/globals";
import runningSum from "./1480-Running-Sum-1";
import runningSumInPlace from "./1480-Running-Sum-2";
import runningSumWithForEach from "./1480-Running-Sum-3";
import runningSumWithMap from "./1480-Running-Sum-4";
import runningSumWithReducer from "./1480-Running-Sum-5";
import runningSumWithWhile from "./1480-Running-Sum-6";
import runningSumWithRecursion from "./1480-Running-Sum-7";

test("1480-Running-Sum-1", () => {
  expect(runningSum([...testArrays.simple])).toStrictEqual(result1);
  expect(runningSum([...testArrays.ones])).toStrictEqual(result2);
  expect(runningSum([...testArrays.complex])).toStrictEqual(result3);
  expect(runningSum([...testArrays.evens])).toStrictEqual(result4);
});

test("1480-Running-Sum-2", () => {
  expect(runningSumInPlace([...testArrays.simple])).toStrictEqual(result1);
  expect(runningSumInPlace([...testArrays.ones])).toStrictEqual(result2);
  expect(runningSumInPlace([...testArrays.complex])).toStrictEqual(result3);
  expect(runningSumInPlace([...testArrays.evens])).toStrictEqual(result4);
});

test("1480-Running-Sum-3", () => {
  expect(runningSumWithForEach([...testArrays.simple])).toStrictEqual(result1);
  expect(runningSumWithForEach([...testArrays.ones])).toStrictEqual(result2);
  expect(runningSumWithForEach([...testArrays.complex])).toStrictEqual(result3);
  expect(runningSumWithForEach([...testArrays.evens])).toStrictEqual(result4);
});

test("1480-Running-Sum-4", () => {
  expect(runningSumWithMap([...testArrays.simple])).toStrictEqual(result1);
  expect(runningSumWithMap([...testArrays.ones])).toStrictEqual(result2);
  expect(runningSumWithMap([...testArrays.complex])).toStrictEqual(result3);
  expect(runningSumWithMap([...testArrays.evens])).toStrictEqual(result4);
});

test("1480-Running-Sum-5", () => {
  expect(runningSumWithReducer([...testArrays.simple])).toStrictEqual(result1);
  expect(runningSumWithReducer([...testArrays.ones])).toStrictEqual(result2);
  expect(runningSumWithReducer([...testArrays.complex])).toStrictEqual(result3);
  expect(runningSumWithReducer([...testArrays.evens])).toStrictEqual(result4);
});

test("1480-Running-Sum-6", () => {
  expect(runningSumWithWhile([...testArrays.simple])).toStrictEqual(result1);
  expect(runningSumWithWhile([...testArrays.ones])).toStrictEqual(result2);
  expect(runningSumWithWhile([...testArrays.complex])).toStrictEqual(result3);
  expect(runningSumWithWhile([...testArrays.evens])).toStrictEqual(result4);
});

test("1480-Running-Sum-7", () => {
  expect(runningSumWithRecursion([...testArrays.simple])).toStrictEqual(
    result1
  );
  expect(runningSumWithRecursion([...testArrays.ones])).toStrictEqual(result2);
  expect(runningSumWithRecursion([...testArrays.complex])).toStrictEqual(
    result3
  );
  expect(runningSumWithRecursion([...testArrays.evens])).toStrictEqual(result4);
});

// Test Arrays
const testArrays = {
  simple: [1, 2, 3, 4],
  ones: [1, 1, 1, 1, 1],
  complex: [
    7, 0, 84, 78, 26, -63, -24, 96, -42, 15, 65, -99, -39, 100, 84, -38, -95,
    -33, -69, 100, -36, -45, 84, -39, 61, -77, 85, -34, -15, -32, -31, -18, -75,
    90, -98, -85, 39, 66,
  ],
  evens: [2, 4, 6, 8, 10],
};

// Array Running Sums
const result1 = [1, 3, 6, 10];
const result2 = [1, 2, 3, 4, 5];
const result3 = [
  7, 7, 91, 169, 195, 132, 108, 204, 162, 177, 242, 143, 104, 204, 288, 250,
  155, 122, 53, 153, 117, 72, 156, 117, 178, 101, 186, 152, 137, 105, 74, 56,
  -19, 71, -27, -112, -73, -7,
];
const result4 = [2, 6, 12, 20, 30];

import { expect, test } from "@jest/globals";
import runningSum from "./1480-Running-Sum-1";
import runningSumInPlace from "./1480-Running-Sum-2";
import runningSumWithForEach from "./1480-Running-Sum-3";
import runningSumWithMap from "./1480-Running-Sum-4";
import runningSumWithReducer from "./1480-Running-Sum-5";

test("1480-Running-Sum-1", () => {
  expect(runningSum(testArray1_1)).toStrictEqual(result1);
  expect(runningSum(testArray1_2)).toStrictEqual(result2);
  expect(runningSum(testArray1_3)).toStrictEqual(result3);
  expect(runningSum(testArray1_4)).toStrictEqual(result4);
});

test("1480-Running-Sum-2", () => {
  expect(runningSumInPlace(testArray2_1)).toStrictEqual(result1);
  expect(runningSumInPlace(testArray2_2)).toStrictEqual(result2);
  expect(runningSumInPlace(testArray2_3)).toStrictEqual(result3);
  expect(runningSumInPlace(testArray2_4)).toStrictEqual(result4);
});

test("1480-Running-Sum-3", () => {
  expect(runningSumWithForEach(testArray3_1)).toStrictEqual(result1);
  expect(runningSumWithForEach(testArray3_2)).toStrictEqual(result2);
  expect(runningSumWithForEach(testArray3_3)).toStrictEqual(result3);
  expect(runningSumWithForEach(testArray3_4)).toStrictEqual(result4);
});

test("1480-Running-Sum-4", () => {
  expect(runningSumWithMap(testArray4_1)).toStrictEqual(result1);
  expect(runningSumWithMap(testArray4_2)).toStrictEqual(result2);
  expect(runningSumWithMap(testArray4_3)).toStrictEqual(result3);
  expect(runningSumWithMap(testArray4_4)).toStrictEqual(result4);
});

test("1480-Running-Sum-5", () => {
  expect(runningSumWithReducer(testArray5_1)).toStrictEqual(result1);
  expect(runningSumWithReducer(testArray5_2)).toStrictEqual(result2);
  expect(runningSumWithReducer(testArray5_3)).toStrictEqual(result3);
  expect(runningSumWithReducer(testArray5_4)).toStrictEqual(result4);
});

// Test Arrays
const testArray1_1: number[] = [1, 2, 3, 4];
const testArray1_2: number[] = [1, 1, 1, 1, 1];

const testArray1_3: number[] = [
  7, 0, 84, 78, 26, -63, -24, 96, -42, 15, 65, -99, -39, 100, 84, -38, -95, -33,
  -69, 100, -36, -45, 84, -39, 61, -77, 85, -34, -15, -32, -31, -18, -75, 90,
  -98, -85, 39, 66,
];
const testArray1_4: number[] = [2, 4, 6, 8, 10];

const testArray2_1: number[] = [1, 2, 3, 4];
const testArray2_2: number[] = [1, 1, 1, 1, 1];
const testArray2_3: number[] = [
  7, 0, 84, 78, 26, -63, -24, 96, -42, 15, 65, -99, -39, 100, 84, -38, -95, -33,
  -69, 100, -36, -45, 84, -39, 61, -77, 85, -34, -15, -32, -31, -18, -75, 90,
  -98, -85, 39, 66,
];
const testArray2_4: number[] = [2, 4, 6, 8, 10];

const testArray3_1: number[] = [1, 2, 3, 4];
const testArray3_2: number[] = [1, 1, 1, 1, 1];
const testArray3_3: number[] = [
  7, 0, 84, 78, 26, -63, -24, 96, -42, 15, 65, -99, -39, 100, 84, -38, -95, -33,
  -69, 100, -36, -45, 84, -39, 61, -77, 85, -34, -15, -32, -31, -18, -75, 90,
  -98, -85, 39, 66,
];
const testArray3_4: number[] = [2, 4, 6, 8, 10];

const testArray4_1: number[] = [1, 2, 3, 4];
const testArray4_2: number[] = [1, 1, 1, 1, 1];
const testArray4_3: number[] = [
  7, 0, 84, 78, 26, -63, -24, 96, -42, 15, 65, -99, -39, 100, 84, -38, -95, -33,
  -69, 100, -36, -45, 84, -39, 61, -77, 85, -34, -15, -32, -31, -18, -75, 90,
  -98, -85, 39, 66,
];
const testArray4_4: number[] = [2, 4, 6, 8, 10];

const testArray5_1: number[] = [1, 2, 3, 4];
const testArray5_2: number[] = [1, 1, 1, 1, 1];
const testArray5_3: number[] = [
  7, 0, 84, 78, 26, -63, -24, 96, -42, 15, 65, -99, -39, 100, 84, -38, -95, -33,
  -69, 100, -36, -45, 84, -39, 61, -77, 85, -34, -15, -32, -31, -18, -75, 90,
  -98, -85, 39, 66,
];
const testArray5_4: number[] = [2, 4, 6, 8, 10];

// Array Running Sums
const result1 = [1, 3, 6, 10];
const result2 = [1, 2, 3, 4, 5];
const result3 = [
  7, 7, 91, 169, 195, 132, 108, 204, 162, 177, 242, 143, 104, 204, 288, 250,
  155, 122, 53, 153, 117, 72, 156, 117, 178, 101, 186, 152, 137, 105, 74, 56,
  -19, 71, -27, -112, -73, -7,
];
const result4 = [2, 6, 12, 20, 30];

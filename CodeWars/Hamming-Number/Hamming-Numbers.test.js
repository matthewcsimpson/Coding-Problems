import { expect, test } from "@jest/globals";
import { hamming } from "./Hamming-Numbers.js";

test("Hamming numbers", () => {
  expect(hamming(1)).toBe(1);
  expect(hamming(2)).toBe(2);
  expect(hamming(3)).toBe(3);
  expect(hamming(4)).toBe(4);
  expect(hamming(5)).toBe(5);
  expect(hamming(6)).toBe(6);
  expect(hamming(7)).toBe(8);
  expect(hamming(8)).toBe(9);
  expect(hamming(9)).toBe(10);
  expect(hamming(10)).toBe(12);
});

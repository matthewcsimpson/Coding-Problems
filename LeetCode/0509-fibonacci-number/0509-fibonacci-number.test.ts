import { expect, test } from "@jest/globals";
import { fib } from "./0509-fibonacci-number";

test("0509-fibonacci-number", () => {
  expect(fib(1)).toBe(1);
  expect(fib(2)).toBe(1);
  expect(fib(3)).toBe(2);
  expect(fib(4)).toBe(3);
  expect(fib(5)).toBe(5);
  expect(fib(6)).toBe(8);
  expect(fib(20)).toBe(6765);
});

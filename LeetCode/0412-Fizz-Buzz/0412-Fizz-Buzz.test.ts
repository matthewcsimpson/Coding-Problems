import { test, expect } from "@jest/globals";
import fizzBuzz from "./0412-Fizz-Buzz";

test("fizzBuzz", () => {
  expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
  expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  expect(fizzBuzz(15)).toEqual([
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
  ]);
  expect(fizzBuzz(1)).toEqual(["1"]);
  expect(fizzBuzz(0)).toEqual([]);
  expect(fizzBuzz(35)).toEqual([
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
    "16",
    "17",
    "Fizz",
    "19",
    "Buzz",
    "Fizz",
    "22",
    "23",
    "Fizz",
    "Buzz",
    "26",
    "Fizz",
    "28",
    "29",
    "FizzBuzz",
    "31",
    "32",
    "Fizz",
    "34",
    "Buzz",
  ]);
});

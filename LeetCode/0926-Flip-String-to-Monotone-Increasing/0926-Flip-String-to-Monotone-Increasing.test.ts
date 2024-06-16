import { test, expect } from "@jest/globals";
import minFlipsMonoIncr from "./0926-Flip-String-to-Monotone-Increasing";

test("0926-Flip-String-to-Monotone-Increasing", () => {
  expect(minFlipsMonoIncr("")).toBe(0);
  expect(minFlipsMonoIncr("00000")).toBe(0);
  expect(minFlipsMonoIncr("11111")).toBe(0);
  expect(minFlipsMonoIncr("01010101")).toBe(3);
  expect(minFlipsMonoIncr("010110101")).toBe(3);
  expect(minFlipsMonoIncr("010110110100")).toBe(5);
});

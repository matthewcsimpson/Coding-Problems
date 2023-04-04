import { test, expect } from "@jest/globals";
import plusMinusTS from "./Plus-Minus";

test("PlusMinusTS", () => {
    expect(plusMinusTS([-4, 3, -9, 0, 4, 1])).toStrictEqual([
      "0.500000",
      "0.333333",
      "0.166667",
    ]);
    expect(plusMinusTS([1, 1, 0, -1, -1])).toStrictEqual([
      `0.400000`,
      `0.400000`,
      `0.200000`,
    ]);
  });
  
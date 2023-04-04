import { test, expect } from "@jest/globals";
import miniMaxSumTS from "./MiniMaxSum";

test("Mini-Max Sum TS", () => {
    expect(miniMaxSumTS([1, 2, 3, 4, 5])).toBe("10, 14");
    expect(miniMaxSumTS([7, 69, 2, 221, 8974])).toBe("299, 9271");
  });
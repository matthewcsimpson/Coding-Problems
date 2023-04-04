import { test, expect } from "@jest/globals";
import birthdayCakeCandles from "./Birthday-Cake-Candles";

test("Birthday-Cake-Candles", () => {
  expect(birthdayCakeCandles([4, 3, 2, 4])).toBe(2);
  expect(birthdayCakeCandles([4, 3, 2, 4, 5, 4, 6, 7, 6, 7, 1, 7, 7])).toBe(4);
});

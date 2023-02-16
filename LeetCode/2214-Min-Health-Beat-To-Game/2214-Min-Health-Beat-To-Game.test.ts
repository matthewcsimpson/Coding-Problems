import { expect, test } from "@jest/globals";
import minimumHealth from "./2214-Min-Health-Beat-To-Game";

test("2214-Min-Health-Beat-To-Game", () => {
  expect(minimumHealth([2, 7, 4, 3], 4)).toBe(13);
  expect(minimumHealth([2, 5, 3, 4], 7)).toBe(10);
  expect(minimumHealth([3, 3, 3], 0)).toBe(10);
  expect(minimumHealth([0], 0)).toBe(1);
  expect(minimumHealth([3], 1)).toBe(3);
});

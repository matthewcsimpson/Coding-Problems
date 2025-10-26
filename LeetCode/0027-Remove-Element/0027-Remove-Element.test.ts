import { test, expect } from "@jest/globals";
import removeElement from "./0027-Remove-Element";

test("removeElement", () => {
  expect(removeElement([3, 2, 2, 3], 3)).toEqual(2);
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
  expect(removeElement([], 0)).toEqual(0);
});

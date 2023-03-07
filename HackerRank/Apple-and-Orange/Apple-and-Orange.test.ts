import { test, expect } from "@jest/globals";
import countApplesAndOranges from "./Apple-and-Orange";

test("Apple & Orange", () => {
  expect(
    countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
  ).toStrictEqual([1, 1]);
});

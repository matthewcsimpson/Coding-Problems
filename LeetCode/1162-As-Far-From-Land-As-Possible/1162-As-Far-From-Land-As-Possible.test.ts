import { expect, test } from "@jest/globals";
import maxDistance from "./1162-As-Far-From-Land-As-Possible";

test("1162-As-Far-From-Land-As-Possible", () => {
  expect(
    maxDistance([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ])
  ).toBe(2);
  expect(
    maxDistance([
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  ).toBe(4);
});

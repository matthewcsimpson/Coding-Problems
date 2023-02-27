import { expect, test } from "@jest/globals";
import threeSumTS from "./0015-Three-Sum";

test("0015-Three-Sum", () => {
  expect(threeSumTS([-1, 0, 1, 2, -1, -4])).toStrictEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
  expect(threeSumTS([0, 1, 1])).toStrictEqual([]);
  expect(threeSumTS([0, 0, 0])).toStrictEqual([[0, 0, 0]]);
});

import { expect, test } from "@jest/globals";
import maxAreaTS from "./0011-Container-With-Most-Water";

test("0011-Container-With-Most-Water", () => {
  expect(maxAreaTS([1, 1])).toBe(1);
  expect(maxAreaTS([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  expect(maxAreaTS([1, 8, 6, 2, 5, 4, 8, 3, 7])).not.toBe(48);
});

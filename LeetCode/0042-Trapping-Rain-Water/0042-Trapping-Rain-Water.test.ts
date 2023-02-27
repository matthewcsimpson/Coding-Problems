import { expect, test } from "@jest/globals";
import trap from "./0042-Trapping-Rain-Water";

test("0042-Trapping-Rain-Water", () => {
  expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
  expect(trap([4,2,0,3,2,5])).toBe(9);
});

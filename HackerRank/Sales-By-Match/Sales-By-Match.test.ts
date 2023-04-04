import { test, expect } from "@jest/globals";
import sockMerchant from "./Sales-By-Match";

test("Sales By Match", () => {
  expect(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
  expect(sockMerchant([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5])).toBe(6);
});

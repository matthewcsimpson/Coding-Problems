import { test, expect } from "@jest/globals";
import minimumNumber from "./Strong-Password";

test("Strong Password", () => {
  expect(minimumNumber(3, "Ab1")).toBe(3);
  expect(minimumNumber(11, "#HackerRank")).toBe(1);
  expect(minimumNumber(7, "AUzs-nV")).toBe(1);
  expect(minimumNumber(7, "zQztAFQ")).toBe(2);
  expect(minimumNumber(7, "#**#*")).toBe(3);

});



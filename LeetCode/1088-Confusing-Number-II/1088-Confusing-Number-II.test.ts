import { expect, test } from "@jest/globals";
import confusingNumberII from "./1088-Confusing-Number-II";

test("1088-Confusing-Number-II", () => {
  expect(confusingNumberII(20)).toBe(6); 
  expect(confusingNumberII(100)).toBe(19); 
  expect(confusingNumberII(1000)).toBe(107); 
});

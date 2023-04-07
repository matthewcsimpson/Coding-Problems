import { test, expect } from "@jest/globals";
import camelcase from "./CamelCase";

test("CamelCase", () => {
  expect(camelcase("saveChangesInTheEditor")).toBe(5);
  expect(camelcase("singleword")).toBe(1);
  expect(camelcase("abCd")).toBe(2);
  expect(camelcase("thisIsATestOfTheCamelCaseFunction")).toBe(9);
});

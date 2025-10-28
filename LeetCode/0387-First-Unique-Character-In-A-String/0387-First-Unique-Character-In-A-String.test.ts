import { expect, test } from "@jest/globals";
import firstUniqCharOne from "./0387-First-Unique-Character-In-A-String-1";
import firstUniqChartwo from "./0387-First-Unique-Character-In-A-String-2";

test("firstUniqCharOne", () => {
  expect(firstUniqCharOne("leetcode")).toBe(0);
  expect(firstUniqCharOne("loveleetcode")).toBe(2);
  expect(firstUniqCharOne("aabb")).toBe(-1);
  expect(firstUniqCharOne("dddccdbba")).toBe(8);
});

test("firstUniqChartwo", () => {
  expect(firstUniqChartwo("leetcode")).toBe(0);
  expect(firstUniqChartwo("loveleetcode")).toBe(2);
  expect(firstUniqChartwo("aabb")).toBe(-1);
  expect(firstUniqChartwo("dddccdbba")).toBe(8);
});

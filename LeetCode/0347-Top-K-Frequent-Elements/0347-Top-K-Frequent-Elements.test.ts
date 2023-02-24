import { test, expect } from "@jest/globals";
import topKFrequent from "./0347-Top-K-Frequent-Elements-1";
import topKFrequentTwo from "./0347-Top-K-Frequent-Elements-2";

test("0347-Top-K-Frequent-Elements", () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toStrictEqual([1, 2]);
  expect(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)).toStrictEqual([-1, 2]);
});

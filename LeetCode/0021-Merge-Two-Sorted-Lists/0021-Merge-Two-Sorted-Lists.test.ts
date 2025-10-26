import { test, expect } from "@jest/globals";
import { ListNodeTs, mergeTwoListsTs } from "./0021-Merge-Two-Sorted-Lists.ts";

let t1 = new ListNodeTs(1, new ListNodeTs(2, new ListNodeTs(4, null)));
let t2 = new ListNodeTs(1, new ListNodeTs(3, new ListNodeTs(4, null)));

test("mergeTwoListsTs", () => {
  const merged = mergeTwoListsTs(t1, t2);

  const expected = new ListNodeTs(
    1,
    new ListNodeTs(
      1,
      new ListNodeTs(
        2,
        new ListNodeTs(3, new ListNodeTs(4, new ListNodeTs(4, null)))
      )
    )
  );

  expect(merged).toEqual(expected);
});

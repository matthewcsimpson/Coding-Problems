import { test, expect } from "@jest/globals";
import { ListNodeJs, mergeTwoListsJs } from "./0021-Merge-Two-Sorted-Lists.js";

test("0021-Merge-Two-Sorted-Lists", () => {
  let merged = mergeTwoListsJs(l1, l2);

  let expected = new ListNodeJs(
    1,
    new ListNodeJs(
      1,
      new ListNodeJs(2, new ListNodeJs(3, new ListNodeJs(4, new ListNodeJs(4))))
    )
  );

  expect(merged).toStrictEqual(expected);
});

// Test data
let l1 = new ListNodeJs(1, new ListNodeJs(2, new ListNodeJs(4)));
let l2 = new ListNodeJs(1, new ListNodeJs(3, new ListNodeJs(4)));
let l3 = new ListNodeJs(3, new ListNodeJs(5));

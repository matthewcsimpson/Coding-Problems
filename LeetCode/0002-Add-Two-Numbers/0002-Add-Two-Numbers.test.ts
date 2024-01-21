import { expect, test } from "@jest/globals";

import ListNode from "./0002-ListNode-Def";
import addTwoNumbers from "./0002-Add-Two-Numbers";

test("0002-add-two-numbers", () => {
  expect(addTwoNumbers(list1, list2)).toEqual(res1);
  expect(addTwoNumbers(list3, list4)).toEqual(res2);
  expect(addTwoNumbers(list5, list6)).toEqual(res3);
});

// 123 + 452 = 575
let list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
let list2 = new ListNode(4, new ListNode(5, new ListNode(2)));
let res1 = new ListNode(5, new ListNode(7, new ListNode(5)));

// 243 + 564 = 708
let list3 = new ListNode(2, new ListNode(4, new ListNode(3)));
let list4 = new ListNode(5, new ListNode(6, new ListNode(4)));
let res2 = new ListNode(7, new ListNode(0, new ListNode(8)));

// 9999999 + 9999 = 89990001
let list5 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
);
let list6 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
let res3 = new ListNode(
  8,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))
      )
    )
  )
);

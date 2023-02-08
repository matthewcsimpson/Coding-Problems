// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by
// splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  // new ListNode
  let result = new ListNode(undefined);

  // reference to the current node of the list
  let current = result;

  // iterate over both lists while both lists are not null.
  while (list1 !== null && list2 !== null) {
    // compare list values.  If list1 is larger, add the current list2 to the merged list.
    if (list1.val >= list2.val) {
      current.next = list2;
      list2 = list2.next;
      // if list is larger, add list1 to the merged list.
    } else {
      current.next = list1;
      list1 = list1.next;
    }
    // advance to the next node in the list.
    current = current.next;
  }

  // if there are any remaining nodes, merge them to the list.
  if (list1 !== null) {
    current.next = list1;
  }
  if (list2 !== null) {
    current.next = list2;
  }

  // return the new list.
  return result.next;
};

let l1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

console.log(mergeTwoLists(l1, l2));

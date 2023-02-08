// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Constraints:
// - The number of nodes in the list is the range [0, 5000].
// - -5000 <= Node.val <= 5000

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const reverseList = (head: ListNode | null): ListNode | null => {
  // New variable to hold a listnode
  let previous: ListNode | null = null;
  // Current variable to hold the current node we're working with. assigned to the start to start. 
  let current = head;

  // Loop!
  while (current != null) {
    // Variable to hold the next ListNode
    const next = current.next;
    // Make the next element the previous element. 
    current.next = previous;
    // Reset the previous element to be the current element. 
    previous = current;
    // Reset the current element to be the next element. 
    current = next;
  }
  // Return the thing. 
  return previous;
};

// [1,2,3,4,5]
const l1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
);

// console.log(reverseList(l1));

reverseList(l1);

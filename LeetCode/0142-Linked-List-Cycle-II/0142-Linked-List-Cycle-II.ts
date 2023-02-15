//   Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  // variables to traverse the list with.
  // Slow will traverse the list one step at at ime.
  // Fast will traverse two steps at a time.
  let slow = head;
  let fast = head;

  // loop the list using fast. 
  while (fast !== null && fast.next !== null) {
    // one step forward with slow, two with fast. 
    slow = slow!.next;
    fast = fast!.next.next;

    // if fast catches up to slow, then it has cycled around. 
    if (fast === slow) {
    // reset slow to the head. 
      slow = head;
      // while slow and fast are not equl, iterate them forward. 
      while (slow !== fast) {
        slow = slow!.next;
        fast = fast!.next;
      }
      // return the node that slow is currently at. 
      return slow;
    }
  }
  return null;
}

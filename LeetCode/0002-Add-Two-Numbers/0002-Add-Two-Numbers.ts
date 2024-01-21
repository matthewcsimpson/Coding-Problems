import ListNode from "./0002-ListNode-Def";
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode => {
  // Create a new linked list to store the result
  const result = new ListNode(0);
  let current: ListNode | null = result;
  let carry: number = 0;

  // Loop until we reach the end of both linked lists
  while (l1 !== null || l2 !== null) {
    // Get the values at the current nodes of both linked lists, or 0 if the node is null
    const val1: number = l1 ? l1.val : 0;
    const val2: number = l2 ? l2.val : 0;

    // Calculate the sum of the current digits and the carry from the previous iteration
    const sum: number = val1 + val2 + carry;

    // Update the carry for the next iteration
    carry = sum >= 10 ? 1 : 0;

    // Append the last digit of the sum to the result linked list
    current.next = new ListNode(sum % 10);
    current = current.next;

    // Move on to the next digit in both linked lists
    if (l1 !== null) {
      l1 = l1.next;
    }

    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  // If there's a carry left over, append it to the result
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  // The result is the next node of the initial dummy node
  return result.next as ListNode;
};

export default addTwoNumbers;

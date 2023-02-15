//   Definition for singly-linked list.
function ListNode(val, next) {
  // val is a value, or it's 0.
  this.val = val === undefined ? 0 : val;
  // next is either nothing, or another ListNode().
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // Create a new linked list to store the result
  let result = new ListNode(0);
  let current = result;
  let carry = 0;

  // Loop until we reach the end of both linked lists
  while (l1 || l2) {
    // Get the values at the current nodes of both linked lists, or 0 if the node is null
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    // Calculate the sum of the current digits and the carry from the previous iteration
    let sum = val1 + val2 + carry;

    // Update the carry for the next iteration
    carry = sum >= 10 ? 1 : 0;

    // Append the last digit of the sum to the result linked list
    current.next = new ListNode(sum % 10);
    current = current.next;

    // Move on to the next digit in both linked lists
    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  // If there's a carry left over, append it to the result
  if (carry > 0) current.next = new ListNode(carry);

  return result.next;
};

module.exports = addTwoNumbers;

// Test Data
let list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
let list2 = new ListNode(4, new ListNode(5, new ListNode(2)));

// Tests
console.log(addTwoNumbers(list1, list2));

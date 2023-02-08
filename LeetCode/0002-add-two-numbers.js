// You are given two non-empty linked lists representing two
// non-negative integers. The digits are stored in reverse order,
// and each of their nodes contains a single digit. Add the two numbers
// and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero,
// except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:
// - The number of nodes in each linked list is in the range [1, 100].
// - 0 <= Node.val <= 9
// - It is guaranteed that the list represents a number that does not have leading zeros.

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

let list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
let list2 = new ListNode(4, new ListNode(5, new ListNode(2)));

console.log(addTwoNumbers(list1, list2));

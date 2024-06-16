/**
 * Represents a node in a linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;

  /**
   * Creates a new instance of the ListNode class.
   * @param val - The value of the node.
   * @param next - The next node in the linked list.
   */
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Solution 1: count the lenght, and then iterate to that point.
 * @param head
 * @returns
 */
const middleNode = (head: ListNode | null): ListNode | null => {
  // A new list to iterate through
  let count: ListNode | null = head;
  // A variable to count the lenght
  let length: number = 0;

  // Loop the list, and iterate the length counter each time
  while (count?.next) {
    count = count.next;
    length++;
  }

  // Since we are looking for the middle node, divide the counter in half and round up.
  length = Math.ceil(length / 2);

  // A new list to iterate through
  let check: ListNode | null = head;
  // Loop the new list, and advance as many times as the now-halved length counter.
  while (length) {
    check = check!.next;
    length--;
  }

  // Return the new list.
  return check;
};

// Test Lists
let l1 = 
new ListNode(1,
  new ListNode(2, 
    new ListNode(3, 
      new ListNode(4, 
        new ListNode(5, null))))
);

let l2 = 
new ListNode(1,
  new ListNode(2,
    new ListNode(3, 
      new ListNode(4, 
        new ListNode(5, 
          new ListNode(6, null))))
  )
);

// Tests
console.log(middleNode(l1));
console.log(middleNode(l2));

/**
 * Solution 2: duplicate the list twice.  Iterate through list1 one at a time, and through list2 2 at a time.
 *              When the second loop is done (2x as fast) the first list will be in the middle.
 * @param head
 * @returns
 */
const middleNode2 = (head: ListNode | null): ListNode | null => {
  // Duplicate the list twice
  let check = head;
  let doubleup = head;

  // Loop one of the lists.
  while (doubleup?.next) {
    // Iterate one of the lists 1 node at a time.
    check = check!.next;
    // Iterate the other list 2 nodes at a time.
    doubleup = doubleup.next;
    doubleup = doubleup.next;
  }

  // Return the list that was iterated 1 node at a time.
  return check;
};

// Test Lists
let l3 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
);

let l4 = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null))))
  )
);

// Tests
console.log(middleNode2(l3));
console.log(middleNode2(l4));

//   Definition for singly-linked list.
function ListNode(val, next) {
    // val is a value, or it's 0.
    this.val = val === undefined ? 0 : val;
    // next is either nothing, or another ListNode().
    this.next = next === undefined ? null : next;
  }

const addTwoNumbers = require('./0002-Add-Two-Numbers')


test("0002-Add-Two-Numbers", ()=>{
    // console.log(addTwoNumbers(list1, list2))
    expect(addTwoNumbers(list1, list2)).toBe(ListNode {"next": ListNode {"next": ListNode {"next": null,"val": 5,},"val": 7});
})


// Test Data
let list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
let list2 = new ListNode(4, new ListNode(5, new ListNode(2)));


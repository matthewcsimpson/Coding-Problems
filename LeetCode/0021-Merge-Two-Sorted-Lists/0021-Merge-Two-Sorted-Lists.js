/**
 * Definition for singly-linked list.
 */
function ListNodeJs(val, next) {
  // val is a value, or it's 0.
  this.val = val === undefined ? 0 : val;
  // next is either nothing, or another ListNode().
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNodeJs} list1
 * @param {ListNodeJs} list2
 * @return {ListNodeJs}
 */
const mergeTwoListsJs = (list1, list2) => {
  // new ListNode
  let result = new ListNodeJs(null);

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

module.exports = { ListNodeJs, mergeTwoListsJs };

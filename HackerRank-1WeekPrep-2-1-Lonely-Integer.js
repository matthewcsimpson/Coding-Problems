// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// a = [1,2,3,4,3,2,1]
// The unique element is 4

// ### Function Description
// Complete the lonelyinteger function in the editor below.
// lonelyinteger has the following parameter(s):
// int a[n]: an array of integers
//
// ### Returns
// int: the element that occurs only once

// ### Input Format
// The first line contains a single integer, n, the number of integers in the array.
// The second line contains n space-separated integers that describe the values in a.

// ### Constraints

// 1 < n 100
// It is guaranteed that n is an odd number and that there is one unique element.
// 0 <= a[i] <= 100, where 0 <= i < n.

/**
 * Complete the 'lonelyinteger' function below.
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 *
 * @param {array} a
 */
function lonelyinteger(a) {
  // new array to keep track of numbers
  let check = [];
  // loop through the incoming array
  for (let i = 0; i < a.length; i++) {
    // if the check array does not contain the current element,
    // add the current element to the check array
    if (!check.includes(a[i])) {
      check.push(a[i]);
      // if the check array does contain the current element,
      // remove that element from the check array
    } else if (check.includes(a[i])) {
      check.splice(check.indexOf(a[i]), 1);
    }
  }

  // return the first element of the check array, which should be the only element,
  // as all others would have been added and then removed again.
  return check[0];
}

console.log(lonelyinteger([0, 0, 1, 2, 1]));
console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
console.log(lonelyinteger([1, 1, 2]));
console.log(lonelyinteger([1]));

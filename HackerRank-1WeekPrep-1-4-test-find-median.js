// Find the value of the median element of an array with a odd length
// after sorting into ascending order.`

// eg:
// a = [1,2,4,5,3]

// sorted = [1,2,3,4,5]

// median element is 3

/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
  // Write your code here

  // find the median value.  In an array with an odd number of elements, this will be
  // length /2 and then rounded down to the nearest whole number.
  let median = Math.floor(arr.length / 2);

  // sort the array so all elements are in ascending order.
  arr.sort((a, b) => {
    return a - b;
  });

  // return the element in the median spot.
  return arr[median];
}

console.log(findMedian([1, 2, 5, 4, 3])); // 3
console.log(findMedian([1, 2, 5, 4, 3, 6, 7, 9, 8, 20, 31])); // 6
console.log(findMedian([28, 45, 11, 101, 67, 1, 33, 453, 2, 3, 4])); // 28

console.log(Math.floor(5 / 2));

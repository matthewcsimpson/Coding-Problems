// We have an integer array arr, where all the integers in arr are equal
// except for one integer which is larger than the rest of the integers.
// You will not be given direct access to the array, instead, you will
// have an API ArrayReader which have the following functions:

// int compareSub(int l, int r, int x, int y): where 0 <= l, r, x,
// y < ArrayReader.length(), l <= r and x <= y. The function compares
// the sum of sub-array arr[l..r] with the sum of the sub-array arr[x..y] and returns:
// 1 if arr[l]+arr[l+1]+...+arr[r] > arr[x]+arr[x+1]+...+arr[y].
// 0 if arr[l]+arr[l+1]+...+arr[r] == arr[x]+arr[x+1]+...+arr[y].
// -1 if arr[l]+arr[l+1]+...+arr[r] < arr[x]+arr[x+1]+...+arr[y].
// int length(): Returns the size of the array.
// You are allowed to call compareSub() 20 times at most. You can assume both functions work in O(1) time.

// Return the index of the array arr which has the largest integer.

// ## Example 1:
// Input: arr = [7,7,7,7,10,7,7,7]
// Output: 4
// Explanation: The following calls to the API
// reader.compareSub(0, 0, 1, 1) // returns 0 this is a query comparing the sub-array (0, 0) with the sub array (1, 1), (i.e. compares arr[0] with arr[1]).
// Thus we know that arr[0] and arr[1] doesn't contain the largest element.
// reader.compareSub(2, 2, 3, 3) // returns 0, we can exclude arr[2] and arr[3].
// reader.compareSub(4, 4, 5, 5) // returns 1, thus for sure arr[4] is the largest element in the array.
// Notice that we made only 3 calls, so the answer is valid.

// ## Example 2:
// Input: nums = [6,6,12]
// Output: 2

// ## Constraints:
// 2 <= arr.length <= 5 * 105
// 1 <= arr[i] <= 100
// All elements of arr are equal except for one element which is larger than all other elements.

/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * class ArrayReader {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y]
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     compareSub(l: number, r: number, x: number, y: number): number { };
 *
 *     // Returns the length of the array
 *     length(): number { };
 * };
 */

const getIndex = (reader: ArrayReader): number => {
  // get the first index and the last index.
  let leftside = 0;
  let rightside = reader.length() - 1;

  // while the leftside index is less than the rightside index
  while (leftside < rightside) {
    // calculate the middle point.
    let middle = leftside + Math.floor((rightside - leftside) / 2);

    // run a comparison.
    // for even lengthedarrays compare sub-arrays leftside->middle, and middle->rightside
    // for odd lengthed arrays compare sub-arrays leftside->middle, and middle+1->rightside

    const compare =
      (rightside - leftside) % 2 === 0
        ? reader.compareSub(leftside, middle, middle, rightside)
        : reader.compareSub(leftside, middle, middle + 1, rightside);

    // if the reader returns 0, then return the middle number as it's the large one.
    if (compare === 0) {
      return middle;
      // if the reader returns 1 then reset the rightside with the middle point index as our
      // as the large integer is in the leftside side.
    } else if (compare === 1) {
      rightside = middle;
      // if the reader returns -1 then reset the leftside with the middle point +1,
      // as the large integer is on the rightside
    } else {
      leftside = middle + 1;
    }
  }
  // once the while loop stops, the left side should be the large index
  return leftside;
};

/**
 * implementation enough to make the errors go away.
 */
class ArrayReader {
  // Compares the sum of arr[l..r] with the sum of arr[x..y]
  // return 1 if sum(arr[l..r]) > sum(arr[x..y])
  // return 0 if sum(arr[l..r]) == sum(arr[x..y])
  // return -1 if sum(arr[l..r]) < sum(arr[x..y])
  compareSub(l: number, r: number, x: number, y: number): number {
    return 0;
  }
  // Returns the length of the array
  length(): number {
    return 0;
  }
}

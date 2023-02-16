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

/**
 * @param reader 
 * @returns 
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

const countingSort = (arr) => {
  // create a new array of all zeros, as specified.
  let counting = new Array(100).fill(0);
  // loop through the input array
  for (let i = 0; i < arr.length; i++) {
    // if the value at arr[i] is 0 or greater, then increment
    // the value at that index in the counting array
    // eg if arr[2] is 4, then increment counting[4] by 1.
    if (arr[i] >= 0) {
      counting[arr[i]] += 1;
    }
  }
  // return the counting array.
  return counting;
};

module.exports = countingSort;


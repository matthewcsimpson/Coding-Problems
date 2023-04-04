const miniMaxSumJS = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let biggest = 0;
  let smallest = Number.MAX_SAFE_INTEGER;

  for (let j = 0; j < arr.length; j++) {
    if (sum - arr[j] > biggest) {
      biggest = sum - arr[j];
    }
    if (sum - arr[j] < smallest) {
      smallest = sum - arr[j];
    }
  }
  return smallest + ", " + biggest;
};

module.exports = miniMaxSumJS;


// [1, 2, 3, 4, 5];
// [7, 69, 2, 221, 8974];

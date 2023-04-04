function plusMinusJS(arr) {
  // Write your code here
  let pos = 0;
  let neg = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos += 1;
    } else if (arr[i] < 0) {
      neg += 1;
    } else {
      zero += 1;
    }
  }

  return [(pos / arr.length).toFixed(6), (neg / arr.length).toFixed(6),(zero / arr.length).toFixed(6)]
}

module.exports = plusMinusJS;


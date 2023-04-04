function plusMinusTS(arr: number[]): string[] {
  let pos = 0;
  let zer = 0;
  let neg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else {
      zer++;
    }
  }

  return [
    (pos / arr.length).toFixed(6),
    (neg / arr.length).toFixed(6),
    (zer / arr.length).toFixed(6),
  ];
}

export default plusMinusTS;
function birthdayCakeCandles(candles: number[]): number {
  let highest = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > highest) {
      highest = candles[i];
    }
  }
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === highest) {
      count++;
    }
  }

  return count;
}

export default birthdayCakeCandles;
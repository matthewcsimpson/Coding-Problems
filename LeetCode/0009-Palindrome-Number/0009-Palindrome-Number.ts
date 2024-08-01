function isPalindromeTS(x: number): boolean {
  if ((x < 1 || x % 10 === 0) && x !== 0) {
    return false;
  }

  let start = 0;

  while (x > start) {
    start = start * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === start || x === Math.floor(start / 10);
}

export default isPalindromeTS;

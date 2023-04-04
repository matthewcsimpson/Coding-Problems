function miniMaxSumTS(arr: number[]): number[] {
  let sum = arr.reduce((acc, next) => {
    return acc + next;
  });

  let large = 0,
    small = Number.MAX_SAFE_INTEGER;

  arr.forEach((num) => {
    if (sum - num > large) {
      large = sum - num;
    }
    if (sum - num < small) {
      small = sum - num;
    }
  });

  return [small, large];
}

export default miniMaxSumTS;

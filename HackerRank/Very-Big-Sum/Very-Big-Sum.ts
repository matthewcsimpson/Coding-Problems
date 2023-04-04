function aVeryBigSum(ar: number[]): number {
  return ar.reduce((acc, next) => {
    return acc + next;
  });
}

export default aVeryBigSum;
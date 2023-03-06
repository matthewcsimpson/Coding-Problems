function simpleArraySum(ar: number[]): number {
  return ar.reduce((acc, next) => {
    return acc + next;
  });
}

export default simpleArraySum;
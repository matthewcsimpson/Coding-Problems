function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): number[] {
  let aCount = 0,
    oCount = 0;
  apples.forEach((apple) => {
    if (a + apple >= s && a + apple <= t) {
      aCount++;
    }
  });
  oranges.forEach((orange) => {
    if (b + orange >= s && b + orange <= t) {
      oCount++;
    }
  });

console.log(aCount)
console.log(oCount)

return [aCount, oCount]

}

export default countApplesAndOranges;
function compareTriplets(a: number[], b: number[]): number[] {
  let length = a.length;
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < length; i++) {
    if (a[i] > b[i]) {
      alice++;
    }
    if (b[i] > a[i]) {
      bob++;
    }
  }
  return [alice, bob];
}

export default compareTriplets;
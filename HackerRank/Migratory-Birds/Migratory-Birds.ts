function migratoryBirds(arr: number[]): number {
  let counter = new Map();

  arr.forEach((item) => {
    if (counter.has(item)) {
      counter.set(item, counter.get(item) + 1);
    } else {
      counter.set(item, 1);
    }
  });

  let max: number = Math.max(...counter.values());

  let result: number[] = [];

  counter.forEach((value, key) => {
    if (value === max) {
      result.push(key);
    }
  });

  return result.sort().shift() || 0
}

export default migratoryBirds;

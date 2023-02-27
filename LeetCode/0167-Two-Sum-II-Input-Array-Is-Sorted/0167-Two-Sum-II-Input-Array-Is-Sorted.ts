function twoSumTwo(numbers: number[], target: number): number[] {
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let diff = target - numbers[i];
    if (map.has(diff)) {
      return [map.get(diff) + 1, i + 1];
    } else {
      map.set(numbers[i], i);
    }
  }
  return [];
}

export default twoSumTwo;

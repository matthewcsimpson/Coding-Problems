const twoSumTwo = (numbers: number[], target: number): number[] => {
  // Use a map to track seen numbers and their indices.
  let map = new Map();

  // Iterate through the numbers array.
  for (let i = 0; i < numbers.length; i++) {
    // Calculate the difference needed to reach the target.
    let diff = target - numbers[i];
    // Check if the difference has been seen before.
    if (map.has(diff)) {
      // If it has, return the indices (1-based).
      return [map.get(diff) + 1, i + 1];
    } else {
      // Otherwise, store the current number and its index.
      map.set(numbers[i], i);
    }
  }
  // If no pair is found, return an empty array.
  return [];
};

export default twoSumTwo;

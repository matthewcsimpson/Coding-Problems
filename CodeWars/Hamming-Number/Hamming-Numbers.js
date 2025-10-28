/**
 * Hamming numbers are numbers whose only prime factors are 2, 3, or 5.
 * @param {number} n
 * @returns {number}
 */
const hamming = (n) => {
  // Input validation: n must be a positive integer
  if (n < 1) return -1;
  // Special case: the first Hamming number is always 1
  if (n === 1) return 1;

  // Array to store computed Hamming numbers
  const h = [];
  // Initialize the first Hamming number
  h[0] = 1;

  // Pointers for the next multiples of 2, 3, and 5
  let i2 = 0,
    i3 = 0,
    i5 = 0;

  // loop to generate Hamming numbers up to the n-th
  for (let i = 1; i < n; i++) {
    // Calculate next multiple of 2, 3, and 5
    const a = 2 * h[i2];
    const b = 3 * h[i3];
    const c = 5 * h[i5];

    // The next Hamming number is the smallest of these
    const next = Math.min(a, b, c);
    // Store the next Hamming number
    h[i] = next;

    // Advance the pointer(s) for whichever multiple(s) were used.
    if (next === a) i2++;
    if (next === b) i3++;
    if (next === c) i5++;
  }

  return h[n - 1];
};

module.exports = { hamming };

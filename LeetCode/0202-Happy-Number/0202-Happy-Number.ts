const isHappy = (n: number): boolean => {
  const checked = new Set<number>();
  while (n !== 1 && !checked.has(n)) {
    checked.add(n);
    n = squaresSumHelper(n);
  }
  return n === 1;
};

const squaresSumHelper = (n: number): number => {
  let sum = 0;
  let digits = n.toString();

  for (let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]) * parseInt(digits[i]);
  }

  return sum;
};

export default isHappy;

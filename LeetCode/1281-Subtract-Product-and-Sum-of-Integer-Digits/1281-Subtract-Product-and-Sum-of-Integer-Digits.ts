/**
 * Subtract the product and sum of the digits of an integer.
 * @param n - The input integer.
 * @returns The result of the subtraction.
 */
const subtractProductAndSum = (n: number): number => {
  // Convert the number to a string and split it into individual digits
  const nn = n.toString().split("");
  // Initialize sum and product with the first digit
  let sumTotal = Number(nn[0]);
  let prodTotal = Number(nn[0]);

  // Iterate through the remaining digits to calculate sum and product
  for (let i = 1; i < nn.length; i++) {
    sumTotal += Number(nn[i]);
    prodTotal *= Number(nn[i]);
  }

  // Return the difference between product and sum
  return prodTotal - sumTotal;
};

export default subtractProductAndSum;

console.log();
console.log(9 * 9 * 9 - (9 + 9 + 9));

/**
 * @param costs - array of ice cream bar costs
 * @param  coins - how many coins we have
 * @returns - number of ice cream bars we can buy
 */
const maxIceCream = (costs: number[], coins: number): number => {
  // we need to count how many bars we've bought.
  let numBars = 0;

  // sort the bars into ascending order by price.
  costs.sort((a, b) => {
    return a - b;
  });

  // loop through the bars.
  for (let i = 0; i < costs.length; i++) {
    // if the cost of a bar is more than the number of coins we have, return the number of bars.
    if (costs[i] > coins) {
      return numBars;
      // if the cost of the current bar is less than or equal to the number of coins we have
      // then subtract the cost from our coins, and add one to our bars count.
    } else if (costs[i] <= coins) {
      coins -= costs[i];
      numBars++;
    }
  }

  // return the number of bars we have bought.
  return numBars;
};

export default maxIceCream;



// It is a sweltering summer day, and a boy wants to buy some ice cream bars.

// At the store, there are n ice cream bars. You are given an array `costs` of
// length `n`, where `costs[i]` is the price of the `ith` ice cream bar in coins.
// The boy initially has coins coins to spend, and he wants to buy as many
// ice cream bars as possible.

// Return the maximum number of ice cream bars the boy can buy with `coins` `coins`.

// Note: The boy can buy the ice cream bars in any order.

// Example 1:
// Input: costs = [1,3,2,4,1], coins = 7
// Output: 4
// Explanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price
//                  of 1 + 3 + 2 + 1 = 7.

// Example 2:
// Input: costs = [10,6,8,7,7,8], coins = 5
// Output: 0
// Explanation: The boy cannot afford any of the ice cream bars.

// Example 3:
// Input: costs = [1,6,3,1,2,5], coins = 20
// Output: 6
// Explanation: The boy can buy all the ice cream bars for a total price
//                 of 1 + 6 + 3 + 1 + 2 + 5 = 18.
// Constraints:

// costs.length == n
// 1 <= n <= 105
// 1 <= costs[i] <= 105
// 1 <= coins <= 108

/**
 * @param costs
 * @param  coins
 * @returns
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

console.log(maxIceCream([1, 3, 2, 4, 1], 7)); // 4
console.log(maxIceCream([10, 6, 8, 7, 7, 8], 5)); // 0
console.log(maxIceCream([1, 6, 3, 1, 2, 5], 20)); // 6

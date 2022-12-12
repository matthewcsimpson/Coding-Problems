// You are given an array prices where prices[i] is the price of a
// given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy
// one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If
// you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // set the starting minimum value to be super high.
  let min = Number.MAX_VALUE;
  // set the starting profit to be zero.
  let diff = 0;

  // loop the array of numbers.
  for (let i = 0; i < prices.length; i++) {
    // if the current price is less than the min, then reset the min with the current price.
    if (prices[i] < min) {
      min = prices[i];
      // if the current price is not lower, check if the current diff is less than the
      // current price minus the min. if it is, reset the diff with the current price minus the min.
    } else if (diff < prices[i] - min) {
      diff = prices[i] - min;
    }
  }

  // return the difference.
  return diff;
};

console.log(maxProfit([3, 2, 6, 5, 0, 3]));
console.log(maxProfit([8, 12, 6, 5, 80, 4, 100]));

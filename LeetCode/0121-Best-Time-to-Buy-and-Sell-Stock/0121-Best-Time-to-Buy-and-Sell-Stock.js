/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit =  (prices) =>{
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

module.exports = maxProfit;


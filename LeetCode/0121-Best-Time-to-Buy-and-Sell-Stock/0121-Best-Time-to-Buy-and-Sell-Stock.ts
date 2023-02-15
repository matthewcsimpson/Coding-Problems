const maxProfitTS = (prices: number[]): number => {
  let lowest = Number.MAX_SAFE_INTEGER;
  let profit = 0;

  prices.forEach((price) => {
    if (price < lowest) {
      lowest = price;
    } else if (profit < price - lowest) {
      profit = price - lowest;
    }
  });
  return profit;
}

export default maxProfitTS;

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let top = 0;

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > top) {
      top = candies[i];
    }
  }

  return candies.map((candy) => {
    if (candy + extraCandies >= top) {
      return true;
    } else {
      return false;
    }
  });
}

export default kidsWithCandies
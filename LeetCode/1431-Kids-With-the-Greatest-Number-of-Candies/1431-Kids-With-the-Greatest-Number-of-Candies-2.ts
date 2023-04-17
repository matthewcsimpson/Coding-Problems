function kidsWithCandies2(candies: number[], extraCandies: number): boolean[] {
  let top: number = Math.max(...candies);
  return candies.map((candy) => {
    return candy + extraCandies >= top ? true : false;
  });
}

export default kidsWithCandies2
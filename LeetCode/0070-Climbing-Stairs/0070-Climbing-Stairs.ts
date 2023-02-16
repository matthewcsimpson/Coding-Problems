const climbStairs = (n: number): number => {
  // if n is less than 4, we can just return n.
  if (n < 4) {
    return n;
  }

  // variables to hold 1 step, 2 steps, and the total combinations.
  let one = 1,
    two = 2,
    result = 0;

  for (let i = 3; i <= n; i++) {
    // the result is the combination of the current values of one and two.
    // for example if n is 3, then one and two are 3.
    // if n is four then 1 and 2 are three, and then 2 and 3 are 5;
    result = one + two;
    one = two;
    two = result;
  }

  // return the result.
  return result;
};

export default climbStairs;

/**
 * @param {number[]} tasks
 * @return {number} 
 */
const minimumRounds = (tasks) => {
  // we need an objec tot count the occurences of each Number.
  const check = {};

  // loop the incoming array and count the numbers.
  for (let i = 0; i < tasks.length; i++) {
    // eg: check[2] == check[2] OR 0 if there is no check[2] + 1;
    check[tasks[i]] = (check[tasks[i]] || 0) + 1;
  }

  // now we need to count the rounds
  let rounds = 0;

  // a for...in loop to deal with the object.
  for (const c in check) {
    // if the current value is less than 2, return -1
    // because you cant do one thing in a round

    if (check[c] < 2) {
      return -1;
    } else {
      // the current value divided by 3 and rounded up is added to the round counter
      // eg 2/3 = 0.6666, rounded to 1.
      rounds += Math.ceil(check[c] / 3);
    }
  }
  // return the count of rounds.
  return rounds;
};

module.exports = minimumRounds;

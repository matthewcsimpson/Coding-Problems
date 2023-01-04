// You are given a 0-indexed integer array tasks, where tasks[i]
// represents the difficulty level of a task. In each round, you
// can complete either 2 or 3 tasks of the same difficulty level.

// Return the minimum rounds required to complete all the tasks,
// or -1 if it is not possible to complete all the tasks.

// ### Example 1:
// Input: tasks = [2,2,3,3,2,4,4,4,4,4]
// Output: 4
// Explanation: To complete all the tasks, a possible plan is:
// - In the first round, you complete 3 tasks of difficulty level 2.
// - In the second round, you complete 2 tasks of difficulty level 3.
// - In the third round, you complete 3 tasks of difficulty level 4.
// - In the fourth round, you complete 2 tasks of difficulty level 4.
// It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.

// ### Example 2:
// Input: tasks = [2,3,3]
// Output: -1
// Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the answer is -1.

// Constraints:
// 1 <= tasks.length <= 105
// 1 <= tasks[i] <= 109

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

console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
console.log(minimumRounds([2, 3, 3]));

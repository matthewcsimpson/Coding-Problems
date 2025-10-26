/**
 * Given an integer n, return a string array answer (1-indexed) where:
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 * @param n {number}
 * @returns {string[]}
 */
const fizzBuzz = (n: number): string[] => {
  // Initialize the answer array
  const answer: string[] = [];
  // Loop from 1 to n
  for (let i = 1; i <= n; i++) {
    // Initialize an empty string for each number
    let c: string = ``;
    // Check the divisibility conditions and build the string accordingly
    if (i % 15 === 0) {
      c += `FizzBuzz`;
    } else if (i % 5 === 0) {
      c += `Buzz`;
    } else if (i % 3 === 0) {
      c += `Fizz`;
    } else {
      c += `${i}`;
    }
    // Push the constructed string to the answer array
    answer.push(c);
  }

  // Return the final answer array
  return answer;
};

export default fizzBuzz;

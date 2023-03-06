// Given an array of `n` distinct integers, transform the array into a zig zag sequence by
// permuting the array elements. A sequence will be called a zig zag sequence if the first `k`
// elements in the sequence are in increasing order and the last k elements are in decreasing
// order, where `k = (n+1)/2`.

// You need to find the lexicographically smallest zig zag sequence of the given array.

// Example:
// a = [2,3,5,1,4]

// Now if we permute the array as [1,4,5,3,2], the result is a zig zag sequence.

// Constraints

// 1 <= t <= 20
// 1 <= n <= 10000 (n is always odd)
// 1 <= a_i <= 10^9

function processData(input) {
  let halflength = Math.floor(input.length / 2);
  input.sort((a, b) => {
    return a - b;
  });
  let front = input.slice(0, halflength);
  let back = input.slice(halflength, halflength + halflength);

  let center = input[input.length - 1];
  front.push(center);
//   console.log(front);
//   console.log(back);
//   console.log(center);

  return front.concat(
    back.sort((a, b) => {
      return b - a;
    })
  );
}

console.log(processData([1, 2, 3, 4, 5, 6, 7])); // 1 2 3 7 6 5 4
console.log(processData([2,5,6,7,8,9,10,11,23]));
// console.log(processData());
// console.log(processData());

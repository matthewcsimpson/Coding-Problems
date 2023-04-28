## 2634. Filter Elements from Array

<https://leetcode.com/problems/filter-elements-from-array/description/>

Given an integer array `arr` and a filtering function `fn`, return a new array with a fewer or equal number of elements.

The returned array should only contain elements where `fn(arr[i], i)` evaluated to a truthy value.

_Please solve it without the built-in Array.filter method._

### Example 1:

- Input: `arr = [0,10,20,30]`, `fn = function greaterThan10(n) { return n > 10; }`
- Output: `[20,30]`
- Explanation:
  - `const newArray = filter(arr, fn)`; _// [20, 30]_
  - _The function filters out values that are not greater than 10_

### Example 2:

- Input: `arr = [1,2,3]`, `fn = function firstIndex(n, i) { return i === 0; }`
- Output: `[1]`
- Explanation:
  - _fn can also accept the index of each element_
  - _In this case, the function removes elements not at index 0_

### Example 3:

- Input: `arr = [-2,-1,0,1,2]`, `fn = function plusOne(n) { return n + 1 }`
- Output: `[-2,0,1,2]`
- Explanation:
  - _Falsey values such as 0 should be filtered out_

### Constraints:

- `0 <= arr.length <= 1000`
- `-109 <= arr[i] <= 109`

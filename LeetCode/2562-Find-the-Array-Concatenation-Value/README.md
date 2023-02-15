## 2562. Find the Array Concatenation Value

You are given a 0-indexed integer array `nums`.

The concatenation of two numbers is the number formed by concatenating their numerals.

-   _For example, the concatenation of `15`, `49` is `1549`._

The concatenation value of `nums` is initially equal to `0`. Perform this operation until nums becomes empty:

-   If there exists more than one number in `nums`, pick the first element and last element in `nums` respectively and add the value of their concatenation to the concatenation value of `nums`, then delete the first and last element from `nums`.
-   If one element exists, add its value to the concatenation value of `nums`, then delete it.
-   Return the concatenation value of the `nums`.

### Example 1:
-   Input: `nums = [7,52,2,4]`
-   Output: `596`
-   _Explanation: Before performing any operation, nums is `[7,52,2,4]` and concatenation value is `0`._
    - _In the first operation:_
        _We pick the first element, `7`, and the last element, 4`._
        _Their concatenation is `74`, and we add it to the concatenation value, so it becomes equal to `74`._
        _Then we delete them from `nums`, so nums becomes equal to `[52,2]`._
    - _In the second operation:_
        _We pick the first element, `52`, and the last element, `2`._
        _Their concatenation is `522`, and we add it to the concatenation value, so it becomes equal to `596`._
        _Then we delete them from the nums, so nums becomes empty._
        _Since the concatenation value is `596` so the answer is `596`._

### Example 2:
-   Input: `nums = [5,14,13,8,12]`
-   Output: `673` 

### Constraints:
-   `1 <= nums.length <= 1000`
-   `1 <= nums[i] <= 104`
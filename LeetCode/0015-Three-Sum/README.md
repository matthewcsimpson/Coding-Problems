## 15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

### Example 1:
-   Input: `nums = [-1,0,1,2,-1,-4]`
-   Output: `[[-1,-1,2],[-1,0,1]]`
-   _Explanation:_
    _nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0._
    _nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0._
    _nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0._
    _The distinct triplets are [-1,0,1] and [-1,-1,2]._
    _Notice that the order of the output and the order of the triplets does not matter._

### Example 2:
-   Input: `nums = [0,1,1]`
-   Output: `[]`
-   _Explanation: The only possible triplet does not sum up to 0._

### Example 3:
-   Input: `nums = [0,0,0]`
-   Output: `[[0,0,0]]`
-   _Explanation: The only possible triplet sums up to 0._

### Constraints:
-   `3 <= nums.length <= 3000`
-   `105 <= nums[i] <= 105`
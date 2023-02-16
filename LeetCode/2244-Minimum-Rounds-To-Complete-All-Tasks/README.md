## 2244. Minimum Rounds to Complete All Tasks

You are given a 0-indexed integer array `tasks`, where `tasks[i]`
represents the difficulty level of a task. In each round, you
can complete either 2 or 3 tasks of the same difficulty level.

Return the minimum rounds required to complete all the tasks,
or `-1` if it is not possible to complete all the tasks.

### Example 1:

- Input: `tasks = [2,2,3,3,2,4,4,4,4,4]`
- Output: `4`
- _Explanation: To complete all the tasks, a possible plan is:_
  - _In the first round, you complete 3 tasks of difficulty level 2._
  - _In the second round, you complete 2 tasks of difficulty level 3._
  - _In the third round, you complete 3 tasks of difficulty level 4._
    - _In the fourth round, you complete 2 tasks of difficulty level 4._
_It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4._

### Example 2:
-   Input: `tasks = [2,3,3]`
-    Output: `-1`
-   _Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the answer is `-1`._

### Constraints:
-   `1 <= tasks.length <= 105`
-   `1 <= tasks[i] <= 109`

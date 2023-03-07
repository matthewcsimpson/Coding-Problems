## 422. Valid Word Square

Given an array of strings `words`, return true if it forms a valid word square.

A sequence of strings forms a valid word square if the `kth` row and column read the same string, where `0 <= k < max(numRows, numColumns)`.

### Example 1:

- Input: `words = ["abcd","bnrt","crmy","dtye"]`
- Output: `true`

#### Explanation:

- _The 1st row and 1st column both read "abcd"._
- _The 2nd row and 2nd column both read "bnrt"._
- _The 3rd row and 3rd column both read "crmy"._
- _The 4th row and 4th column both read "dtye"._
- _Therefore, it is a valid word square._

### Example 2:

- Input: `words = ["abcd","bnrt","crm","dt"]`
- Output: `true`

#### Explanation:

- _The 1st row and 1st column both read "abcd"._
- _The 2nd row and 2nd column both read "bnrt"._
- _The 3rd row and 3rd column both read "crm"._
- _The 4th row and 4th column both read "dt"._
- _Therefore, it is a valid word square._

### Example 3:

- Input: `words = ["ball","area","read","lady"]`
- Output: `false`

#### Explanation:

- _The 3rd row reads "read" while the 3rd column reads "lead"._
- _Therefore, it is NOT a valid word square._

### Constraints:

- `1 <= words.length <= 500`
- `1 <= words[i].length <= 500`
- `words[i]` consists of only lowercase English letters.

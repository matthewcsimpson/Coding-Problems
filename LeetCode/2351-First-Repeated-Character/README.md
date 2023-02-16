## 2351. First Letter to Appear Twice

Given a string `s` consisting of lowercase English letters, return the first letter to appear twice.

Note:
-   A letter a appears twice before another letter `b` if the second occurrence of `a` is
before the second occurrence of `b`.
-   `s` will contain at least one letter that appears twice.

### Example 1:
-   Input: `s = "abccbaacz"`
-   Output: `"c"`
-   _Explanation:_
    -   _The letter 'a' appears on the indexes 0, 5 and 6._
    -   _The letter 'b' appears on the indexes 1 and 4._
    -   _The letter 'c' appears on the indexes 2, 3 and 7._
    -   _The letter 'z' appears on the index 8._
    -   _The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest._

### Example 2:
-   Input: `s = "abcdd"`
-   Output: `"d"`
-   Explanation:
    -   _The only letter that appears twice is 'd' so we return 'd'._

### Constraints:
-   `2 <= s.length <= 100`
-   `s` consists of lowercase English letters.
-   `s` has at least one repeated letter.
## 8. String to Integer (atoi)

[LeetCode Link](https://leetcode.com/problems/string-to-integer-atoi/)

Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer (similar to C/C++'s `atoi` function).

The algorithm for `myAtoi(string s)` is as follows:
-   Read in and ignore any leading whitespace.
-   Check if the next character (if not already at the end of the string) is `'-'` or `'+'`. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
-   Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.  
-   Convert these digits into an integer (i.e. `"123" -> 123`, `"0032" -> 32`). If no digits were read, then the integer is `0`. Change the sign as necessary (from step 2). 
-   If the integer is out of the 32-bit signed integer range `[-231, 231 - 1]`, then clamp the integer so that it remains in the range.
-   Specifically, integers less than `-2^31` should be clamped to `-2^31`, and integers greater than `2^31 - 1` should be clamped to `2^31 - 1`. Return the integer as the final result.

Note:
- Only the space character `' '` is considered a whitespace character.
- Do not ignore any characters other than the leading whitespace or the rest of the string
after the digits.

### Example 1:
-   Input: `s = "42"`
-   Output: 42
_Explanation: The underlined characters are what is read in, the caret is the current reader position._
_Step 1: "42" (no characters read because there is no leading whitespace)_
         _^_
_Step 2: "42" (no characters read because there is neither a '-' nor '+')_
         _^_
_Step 3: "42" ("42" is read in)_
           _^_
_The parsed integer is 42._
_Since 42 is in the range [-2^31, 2^31 - 1], the final result is 42._

### Example 2:
-   Input: `s = "   -42"`
-   Output: -42
_Explanation:_
_Step 1: "   -42" (leading whitespace is read and ignored)_
            _^_
_Step 2: "   -42" ('-' is read, so the result should be negative)_
             _^_
_Step 3: "   -42" ("42" is read in)_
               ^
_The parsed integer is -42._
_Since -42 is in the range [-231, 231 - 1], the final result is -42._

### Example 3:
Input: `s = "4193 with words"`
Output: 4193
_Explanation:_
_Step 1: "4193 with words" (no characters read because there is no leading whitespace)_
         _^_
_Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')_
         _^_
_Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)_
             _^_
_The parsed integer is 4193._
_Since 4193 is in the range [-231, 231 - 1], the final result is 4193._

### Constraints:
-   `0 <= s.length <= 200`
-   `s` consists of English letters (lower-case and upper-case), digits (`0-9`), `' '`, `'+'`, `'-'`, and `'.'`.


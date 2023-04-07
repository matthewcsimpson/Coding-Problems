## Two Characters

<https://www.hackerrank.com/challenges/two-characters/problem>

Given a string, remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances of that character must be removed. Determine the longest string possible that contains just two alternating letters.

### Example

`s = abaacdabd`

Delete a, to leave bcdbd. Now, remove the character c to leave the valid string bdbd with a length of 4. Removing either b or d at any point would not result in a valid string. Return 4.

Given a string `s`, convert it to the longest possible string made up only of alternating characters. Return the length of string `t`. If no string `t` can be formed, return `0`.

### Function Description

alternate has the following parameter(s):

- `string s`: a string

Returns.

- `int`: the length of the longest valid string, or if there are none

### Sample Input

`s = 'beabeefeab'`

### Sample Output

`5`

### Explanation

The characters present in are a, b, e, and f. This means that must consist of two of those characters and we must delete two others. Our choices for characters to leave are `[a,b]`, `[a,e]`, `[a, f]`, `[b, e]`, `[b, f]` and `[e, f]`.

If we delete e and f, the resulting string is `babab`. This is a valid as there are only two distinct characters (a and b), and they are alternating within the string.
If we delete a and f, the resulting string is `bebeeeb`. This is not a valid string because there are consecutive e's present. Removing them would leave consecutive b's, so this fails to produce a valid string .

Other cases are solved similarly.

`babab` is the longest string we can create.

## CamelCase

<https://www.hackerrank.com/challenges/camelcase/>

There is a sequence of words in CamelCase as a string of letters, `s`, having the following properties:

- It is a concatenation of one or more words consisting of English letters.
- All letters in the first word are lowercase.
- For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.

Given `s`, determine the number of words in `s`.

### Example

- `s = oneTwoThree`

- There are words in the string: `'one'`, `'Two'`, `'Three'`.

### Function Description

camelcase has the following parameter(s):

- string `s`: the string to analyze

Returns

- `int`: the number of words in

### Constraints

- `<= s.length <= 10^5`

### Sample Input

- `saveChangesInTheEditor`

### Sample Output

- `5`

### Explanation

String `s` contains five words:

- save
- Changes
- In
- The
- Editor

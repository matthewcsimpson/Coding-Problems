## Plus Minus
<https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/>

Given an array of integers, calculate the ratios of its elements that are positive,
negative, and zero. Print the decimal value of each fraction on a new line with
places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to
six decimal places, though answers with absolute error of up to `10^-4` are acceptable.

### Example

- `arr = [1,1,0,-1,-1]`

There are 5 elements, two positive, two negative and one zero. Their ratios are `2/5`, `2/5`
and `1/5`. Results are printed as:

- `0.400000`
- `0.400000`
- `0.200000`

### Function Description

plusMinus has the following parameter(s):

- int `arr[n]`: an array of integers

### Print

Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with digits after the decimal. The function should not return a value.

### Constraints

- `0 < n <= 100`
- `-100 <= arr[i] <= 100`

### Notes

In order to facilitate testing, I'll be returning the results in an array instead of printing them. 
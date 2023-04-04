## Sales by Match

<https://www.hackerrank.com/challenges/sock-merchant/>

There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

### Example

- `n = 7`
- `ar = [1, 2, 1, 2, 1, 3, 2]`

There is one pair of color and one of color . There are three odd socks left, one of each color. The number of pairs is .

### Function Description

sockMerchant has the following parameter(s):

- int `n`: the number of socks in the pile
- int `ar[n]`: the colors of each sock

Returns

- `int`: the number of pairs

###Constraints

- `1<= n <= 100`
- `1 <= ar[i] <= 100` where `0 <= i < n`

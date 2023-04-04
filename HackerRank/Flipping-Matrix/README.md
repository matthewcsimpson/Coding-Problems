## Flippign the Matrix

<https://www.hackerrank.com/challenges/flipping-the-matrix/>

Sean invented a game involving a `2n x 2n` matrix where each cell of the
matrix contains an integer. He can reverse any of its rows or
columns any number of times. The goal of the game is to maximize
the sum of the elements in the submatrix located in the upper-left
quadrant of the matrix.

Given the initial configurations for matrices, help Sean reverse
the rows and columns of each matrix in the best possible way so that
the sum of the elements in the matrix's upper-left quadrant is maximal.

Example
`matrix = [[1,2],[3,4]]`

`1 2`
`3 4`

It is 2 x 2 and we want to maximize the top left quadrant, a matrix. Reverse row 1:

`1 2`
`4 3`

And now reverse column 0:

`4 2`
`1 3`

The maximal sum is 4.

Complete the flippingMatrix function. flippingMatrix has the following parameters:
@param - int matrix[2n][2n]: a 2-dimensional array of integers
@returns - int: the maximum sum possible.

Input Format
The first line contains an integer q, the number of queries.
The next sets of lines are in the following format:

- The first line of each query contains an integer, n.
- Each of the next 2n lines contains space-separated integers matrix[i][j]
  in row i of matrix.

Constraints

- `1 < q < 16`
- `1 < n < 128`
- `0 <= matrix[i][j] <= 4096` where `0 < i,j < 2n`

eg:
Start out with the following matrix:

matrix = [
[112, 42, 83, 119],
[56, 125, 56, 49],
[15, 78, 101, 43],
[62, 98, 114, 108],
];

Perform the following operations to maximize the sum of the

- Reverse column 2

matrix = [
[112, 42, 114, 119],
[56, 125, 101, 49],
[15, 78, 56, 43],
[62, 98, 83, 108],
];

- reverse row 0
  matrix = [
  [119, 114, 42, 112],
  [56, 125, 101, 49],
  [15, 78, 56, 43],
  [62, 98, 83, 108],
  ];

The sum of the values in the upper left 2x2 quadrant is now:

- 119 + 114 + 56 + 125 = 414

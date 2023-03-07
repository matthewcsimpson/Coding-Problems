## Grading Students

HackerLand University has the following grading policy:

- Every student receives a in the inclusive range from to .
- Any less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's according to these rules:

-If the difference between the and the next multiple of is less than , round up to the next multiple of .

- If the value of is less than , no rounding occurs as the result will still be a failing grade.

### Examples

- 84; round to (85 - 84 is less than 3)
- 29; do not round (result is less than 40)
- 57; do not round (60 - 57 is 3 or higher)

Given the initial value of for each of Sam's students, write code to automate the rounding process.

### Function Description

gradingStudents has the following parameter(s):

- int grades[n]: the grades before rounding

Returns

- int[n]: the grades after rounding as appropriate

### Constraints

- `1 <= n <= 60`
- `0<= grades[i] <= 100`

### Sample Input:

`[73, 67, 38, 33]`

### Sample Output

`[75, 67, 40, 33]`

### Explanation

- _Student received a 73, and the next multiple of 5 from 73 is 75. Since 75 - 73 < 3, the student's grade is rounded to 75_.
- _Student received a 67, and the next multiple 5 of from 67 is 70. Since 70 - 67 = 3, the grade will not be modified and the student's final grade is 67_.
- _Student received a 38, and the next multiple of from is 40. Since 40 - 38 = 2, the student's grade will be rounded to 40._
- _Student received a grade below 37, so the grade will not be modified and the student's final grade is 33._

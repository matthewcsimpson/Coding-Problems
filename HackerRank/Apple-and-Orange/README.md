## Apples & Oranges

<https://www.hackerrank.com/challenges/apple-and-orange/>

Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

In the diagram below:

- The red region denotes the house, where is the start point, and is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
- Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point `b`.
- When a fruit falls from its tree, it lands `d` units of distance from its tree of origin along the -axis. _A negative value of `d` means the fruit fell `d` units to the tree's left, and a positive value of `d` means it falls `d` units to the tree's right._

![Apple and Orange](Apple-and-Orange.png)

Given the value of `d` for `m` apples and oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range `[s,t]`)?

For example, Sam's house is between `s = 7` and `t = 10`. The apple tree is located at `a = 4` and the orange at `b = 12`. There are apples `m = 3` and `n = 3` oranges. Apples are thrown `apples = [2,3,-4]` units distance from `a`, and `oranges = [3,-2,-4]`units distance. Adding each apple distance to the position of the tree, they land at `[4+2, 4+3, 4+-4] = [6,7,0]`. Oranges land at `[12+3,12+-2, 12+-4] = [15,10,8]`. One apple and two oranges land in the inclusive range so we print `1,2`

### Function Description

countApplesAndOranges has the following parameter(s):
s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.

### Output Format

Print two integers on two different lines:
The first integer: the number of apples that fall on Sam's house.
The second integer: the number of oranges that fall on Sam's house.
Sample Input 0
7 11
5 15
3 2
-2 2 1
5 -6
Sample Output 0
1
1
Explanation 0
The first apple falls at position .
The second apple falls at position .
The third apple falls at position .
The first orange falls at position .
The second orange falls at position .
Only one fruit (the second apple) falls within the region between and , so we print as our first line of output.
Only the second orange falls within the region between and , so we print as our second line of output.

### Notes:

I will be returning the two values in an array in lieu of separate console statements.

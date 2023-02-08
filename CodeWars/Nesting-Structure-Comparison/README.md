## Nesting Structure Comparison
[CodeWars Link](https://www.codewars.com/kata/520446778469526ec0000001)

Complete the function/method (depending on the language) to return `true` when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

### Examples:
Should return true
-   [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
-   [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

Should return false
-   [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
-   [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

Should return true
-   [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );

Should return false
-   [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );

_For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise._
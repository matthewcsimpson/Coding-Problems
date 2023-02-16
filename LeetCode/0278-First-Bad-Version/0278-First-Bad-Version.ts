/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

    return function (n: number): number {
        let bottom = 1, top = n, result = 1;

        while (top >= bottom) {
            let middle = Math.floor((top + bottom) / 2);
            if (!isBadVersion(middle)) {
                if (isBadVersion(middle + 1)) {
                    return result = middle + 1;
                }
                bottom = middle + 1;
            } else {
                top = middle - 1
            }
        }
        return result;
    }

};
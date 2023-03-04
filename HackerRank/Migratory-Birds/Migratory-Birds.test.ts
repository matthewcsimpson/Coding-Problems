
import { test, expect } from '@jest/globals';
import migratoryBirds from './Migratory-Birds';

test("Migratory-Birds", () => {
  expect(migratoryBirds([1, 1, 2, 2, 3])).toBe(1);
//   expect(migratoryBirds([1, 4, 4, 4, 5, 3])).toBe(4);
//   expect(
//     migratoryBirds(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))
//   ).toBe(3);
});

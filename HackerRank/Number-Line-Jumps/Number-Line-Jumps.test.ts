import { test, expect } from "@jest/globals";
import kangaroo from "./Number-Line-Jumps";

test("Number-Line-Jumps", () => {
  expect(kangaroo(43,2,70,2)).toBe("NO");
  expect(kangaroo(0,2,5,3)).toBe("NO");
  expect(kangaroo(0,3,4,2)).toBe("YES");
});

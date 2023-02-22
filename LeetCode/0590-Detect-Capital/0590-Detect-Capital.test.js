const detectCapitalUse = require("./0590-Detect-Capital-1");
const detectCapitalUseTwo = require("./0590-Detect-Capital-2");

test("0590-Detect-Capital-1", () => {
  expect(detectCapitalUse("USA")).toBe(true);
  expect(detectCapitalUse("FLaG")).toBe(false);
  expect(detectCapitalUse("leetcode")).toBe(true);
  expect(detectCapitalUse("leeTcode")).toBe(false);
});

test("0590-Detect-Capital-2", () => {
  expect(detectCapitalUse("USA")).toBe(true);
  expect(detectCapitalUse("FLaG")).toBe(false);
  expect(detectCapitalUse("leetcode")).toBe(true);
  expect(detectCapitalUse("leeTcode")).toBe(false);
});
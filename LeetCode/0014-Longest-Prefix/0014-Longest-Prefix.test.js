const longestCommonPrefix = require('./0014-Longest-Prefix')

test("0014-Longest-Prefix", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("")
  });




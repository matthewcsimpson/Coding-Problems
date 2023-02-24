import { test, expect } from "@jest/globals";
import groupAnagrams from "./0049-Group-Anagrams";

test("0049-Group-Anagrams", () => {
  expect(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
  ).toStrictEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);

  expect(groupAnagrams([""])).toStrictEqual([[""]]);

  expect(groupAnagrams(["a"])).toStrictEqual([["a"]]);

  expect(
    groupAnagrams(["sleep", "peels", "pools", "loops", "olops"])
  ).toStrictEqual([
    ["sleep", "peels"],
    ["pools", "loops", "olops"],
  ]);
});

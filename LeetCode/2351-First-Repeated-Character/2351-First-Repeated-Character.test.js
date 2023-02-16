const repeatedCharacter = require("./2351-First-Repeated-Character");

test("2351-First-Repeated-Character", () => {
  expect(repeatedCharacter("strings")).toBe("s");
  expect(repeatedCharacter("thequickbrownfoxjumpsoverthelazydog")).toBe("o");
});

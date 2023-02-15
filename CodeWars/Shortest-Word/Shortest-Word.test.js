const findShort = require("./Shortest-Word");

test("shortest-word", () => {
  expect(findShort(string1)).toBe(3);
  expect(findShort(string2)).toBe(3);
  expect(findShort(string3)).toBe(2);
});

// Tests
let string1 = "bitcoin take over the world maybe who knows perhaps";
let string2 = "turns out random test cases are easier than writing out basic ones";
let string3 = "Let's travel abroad shall we";

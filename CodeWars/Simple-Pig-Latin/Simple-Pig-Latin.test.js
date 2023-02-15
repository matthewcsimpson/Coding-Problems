const pigIt = require("./Simple-Pig-Latin");

test("Simple-Pig-Latin", () => {
  expect(pigIt("hello world!")).toBe("ellohay world!");
  expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
  expect(pigIt("This is my string")).toBe("hisTay siay ymay tringsay");
});

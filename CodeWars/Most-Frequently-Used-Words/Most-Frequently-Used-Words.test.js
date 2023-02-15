const topThreeWords = require("./Most-Frequently-Used-Words");

test("Most-Frequently-Used-Words", () => {
  expect(topThreeWords(stringOne)).toStrictEqual(["a", "of", "on"]);
  expect(topThreeWords(stringTwo)).toStrictEqual(["e", "d", "a"]);
  expect(topThreeWords(stringThree)).toStrictEqual(["e", "ddd", "aa"]);
  expect(topThreeWords(stringFour)).toStrictEqual(["won't", "wont"]);
  expect(topThreeWords("  '  ")).toStrictEqual([]);
});

let stringOne =
  "In a village of La Mancha, the name of which I have no desire to call tomind, there lived not long since one of those gentlemen that keep a lancein the lance-rack, an old buckler, a lean hack, and a greyhound forcoursing. An olla of rather more beef than mutton, a salad on mostnights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extraon Sundays, made away with three-quarters of his income.";
let stringTwo = "a a a  b  c c  d d d d  e e e e e";
let stringThree = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
let stringFour = "  //wont won't won't ";
let stringFive = "  '  ";

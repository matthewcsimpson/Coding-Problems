import { expect, test } from "@jest/globals";
import areSentencesSimilar from "./0734-Sentence-Similarity";

test("0734-Sentence-Similarity", () => {
  expect(areSentencesSimilar(sentence1a, sentence1b, similarPairs1)).toBe(true);
  expect(areSentencesSimilar(sentence2a, sentence2b, similarPairs2)).toBe(true);
  expect(areSentencesSimilar(sentence3a, sentence3b, similarPairs3)).toBe(
    false
  );
  expect(areSentencesSimilar(sentence4a, sentence4b, similarPairs4)).toBe(
    true
  );
});

const sentence1a = ["great", "acting", "skills"];
const sentence1b = ["fine", "drama", "talent"];
const similarPairs1 = [
  ["great", "fine"],
  ["drama", "acting"],
  ["skills", "talent"],
];

const sentence2a = ["great"];
const sentence2b = ["great"];
const similarPairs2 = [];

const sentence3a = ["great"],
  sentence3b = ["doubleplus", "good"],
  similarPairs3 = [["great", "doubleplus"]];

console.log(areSentencesSimilar(sentence3a, sentence3b, similarPairs3)); // false

const sentence4a = ["great", "good"],
  sentence4b = ["doubleplus", "good"],
  similarPairs4 = [["great", "doubleplus"]];

console.log(areSentencesSimilar(sentence4a, sentence4b, similarPairs4)); // true

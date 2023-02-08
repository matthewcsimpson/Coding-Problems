// We can represent a sentence as an array of words, for example, the sentence
// "I am happy with leetcode" can be represented as arr = ["I","am",happy","with","leetcode"].

// Given two sentences sentence1 and sentence2 each represented as a string array and
// given an array of string pairs similarPairs where similarPairs[i] = [xi, yi] indicates
// that the two words xi and yi are similar.

// Return true if sentence1 and sentence2 are similar, or false if they are not similar.

// Two sentences are similar if:

// They have the same length (i.e., the same number of words)
// sentence1[i] and sentence2[i] are similar.
// Notice that a word is always similar to itself, also notice that the similarity relation
// is not transitive. For example, if the words a and b are similar, and the words b and c are
// similar, a and c are not necessarily similar.

// Example 1:
// Input: sentence1 = ["great","acting","skills"], sentence2 = ["fine","drama","talent"], similarPairs = [["great","fine"],["drama","acting"],["skills","talent"]]
// Output: true
// Explanation: The two sentences have the same length and each word i of sentence1 is also similar to the corresponding word in sentence2.

// Example 2:
// Input: sentence1 = ["great"], sentence2 = ["great"], similarPairs = []
// Output: true
// Explanation: A word is similar to itself.

// Example 3:
// Input: sentence1 = ["great"], sentence2 = ["doubleplus","good"], similarPairs = [["great","doubleplus"]]
// Output: false
// Explanation: As they don't have the same length, we return false.

// Constraints:
// - 1 <= sentence1.length, sentence2.length <= 1000
// - 1 <= sentence1[i].length, sentence2[i].length <= 20
// - sentence1[i] and sentence2[i] consist of English letters.
// - 0 <= similarPairs.length <= 1000
// - similarPairs[i].length == 2
// - 1 <= xi.length, yi.length <= 20
// - xi and yi consist of lower-case and upper-case English letters.
// - All the pairs (xi, yi) are distinct.

const areSentencesSimilar = (
  sentence1: string[],
  sentence2: string[],
  similarPairs: string[][]
): boolean => {
  // If the sentences are not the same length, they cannot be similar.
  if (sentence1.length !== sentence2.length) {
    return false;
  }
  // If the sentences are exactly the same, return true.
  if (sentence1.toString() === sentence2.toString()) {
    return true;
  }

  // Object to track the word pairs.
  let library: object = {};
  // Put the word pairs in said object.
  for (let i = 0; i < similarPairs.length; i++) {
    library[similarPairs[i][0] + "." + similarPairs[i][1]] = true;
  }

  // Loop the sentences
  for (let i = 0; i < sentence1.length; i++) {
    // If the words are the same, continue
    if (sentence1[i] === sentence2[i]) {
      continue;
    }

    // If the word is in the library, continue.
    // Else return false.
    if (
      library[sentence1[i] + "." + sentence2[i]] ||
      library[sentence2[i] + "." + sentence1[i]]
    ) {
      continue;
    } else {
      return false;
    }
  }

  // If it gets through all that, return true.
  return true;
};

const sentence1A = ["great", "acting", "skills"];
const sentence1B = ["fine", "drama", "talent"];
const similarPairs1 = [
  ["great", "fine"],
  ["drama", "acting"],
  ["skills", "talent"],
];

console.log(areSentencesSimilar(sentence1A, sentence1B, similarPairs1)); // true
const sentence2a = ["great"];
const sentence2b = ["great"];
const similarPairs2 = [];
console.log(areSentencesSimilar(sentence2a, sentence2b, similarPairs2)); // true

const sentence3a = ["great"],
  sentence3b = ["doubleplus", "good"],
  similarPairs3 = [["great", "doubleplus"]];

console.log(areSentencesSimilar(sentence3a, sentence3b, similarPairs3)); // false 

const sentence4a = ["great", "good"],
  sentence4b = ["doubleplus", "good"],
  similarPairs4 = [["great", "doubleplus"]];

console.log(areSentencesSimilar(sentence4a, sentence4b, similarPairs4)); // true

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

export default areSentencesSimilar;

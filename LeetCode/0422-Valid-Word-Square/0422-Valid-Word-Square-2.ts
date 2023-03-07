function validWordSquareTwo(words: string[]): boolean {
  for (let i = 0; i < words[0].length; i++) {
    let vert = "";

    for (let j = 0; j < words.length; j++) {
      if (words[j][i]) {
        vert += words[j][i];
      }
    }

    if (words[i] !== vert) {
      return false;
    }
  }
  return true;
}

export default validWordSquareTwo;

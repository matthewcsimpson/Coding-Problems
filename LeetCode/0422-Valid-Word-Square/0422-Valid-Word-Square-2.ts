function validWordSquareTwo(words: string[]): boolean {
  for (let i = 0; i < words[0].length; i++) {
    if (words[i].length > words.length) {
      return false;
    }

    let vert = "";

    for (let j = 0; j < words[i].length; j++) {
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

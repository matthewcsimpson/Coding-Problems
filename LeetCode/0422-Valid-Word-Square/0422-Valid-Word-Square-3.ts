function validWordSquareThree(words: string[]): boolean {
  for (let i = 0; i < words[0].length; i++) {
    let vert: string = "";
    for (let j = 0; j < words.length; j++) {
      vert += words[j][i] ? words[j][i] : "";
    }
    if (vert !== words[i]) {
      return false;
    }
  }

  return true;
}

export default validWordSquareThree;

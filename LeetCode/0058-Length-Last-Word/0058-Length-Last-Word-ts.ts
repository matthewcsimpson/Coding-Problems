const lengthOfLastWord = (s: string): number => {
  return s
    .trim()
    .split(" ")
    .at(s.trim().split(" ").length - 1)!.length;
};

export default lengthOfLastWord;

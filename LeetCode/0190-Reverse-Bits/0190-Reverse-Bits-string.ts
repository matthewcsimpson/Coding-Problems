const reverseBitsString = (n: number): number => {
  const bin = n.toString(2).padStart(32, "0");
  const rev = bin.split("").reverse().join("");
  return parseInt(rev, 2);
};

export default reverseBitsString;

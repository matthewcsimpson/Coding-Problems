const reverseBitsBinary = (n: number): number => {
  let ans = 0;

  for (let i = 0; i < 32; i++) {
    ans = ans << 1;
    ans = ans | (n & 1);

    n = n >> 1;
  }

  return ans >>> 0;
};

export default reverseBitsBinary;

function staircase(n: number): string[] {
  const res: string[] = [];
  for (let i = 1; i <= n; i++) {
    let arr = new Array(n - i)
      .fill(" ")
      .concat(new Array(i).fill("#"))
      .join("");

    res.push(arr);
  }

  return res;
}

export default staircase;

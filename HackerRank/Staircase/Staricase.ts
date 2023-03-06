function staircase(n: number): void {
  for (let i = 1; i <= n; i++) {
    let arr = new Array(n - i)
      .fill(" ")
      .concat(new Array(i).fill("#"))
      .join("");
    console.log(arr);
  }
}

console.log(staircase(6));

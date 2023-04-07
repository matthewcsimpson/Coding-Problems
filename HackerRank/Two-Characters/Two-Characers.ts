function alternate(s: string): number {
  const chars: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    chars[s[i]] = (chars[s[i]] || 0) + 1;
  }
  const found: string[] = [],
    combos: string[] = [];

  for (let char in chars) {
    for (let i = 0; i < found.length; i++) {
      combos.push(char + found[i]);
    }
    found.push(char);
  }

  let max = 0;

  for (let c = 0; c < combos.length; c++) {
    const regx = new RegExp("[^" + combos[c] + "]", "g");
    const str = s.replace(regx, "");
    let ans = true;

    for (let d = 1; d < str.length; d++) {
      if (str[d - 1] === str[d]) {
        ans = false;
        break;
      }
    }
    if (ans === true) {
      if (str.length > max) {
        max = str.length;
      }
    }
  }

  return max;
}

export default alternate;
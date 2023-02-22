function isAnagramTwo(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

export default isAnagramTwo
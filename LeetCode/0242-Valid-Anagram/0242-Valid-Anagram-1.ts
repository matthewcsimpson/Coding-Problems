function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }

  let sA = s.split("").sort();
  let tA = t.split("").sort();

  for (let i = 0; i < sA.length; i++) {
    if (sA[i] !== tA[i]) {
      return false;
    }
  }

  return true;
}

export default isAnagram;
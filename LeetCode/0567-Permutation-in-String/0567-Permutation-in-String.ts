function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }

  const s1Count = Array(26).fill(0);
  const s2Count = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    s2Count[s2[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] == s2Count[i]) {
      matches += 1;
    }
  }

  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    if (matches == 26) {
      return true;
    }

    let index = s2[right].charCodeAt(0) - "a".charCodeAt(0);

    s2Count[index] += 1;
    if (s1Count[index] == s2Count[index]) {
      matches += 1;
    } else if (s1Count[index] + 1 == s2Count[index]) {
      matches -= 1;
    }

    let index2 = s2[left].charCodeAt(0) - "a".charCodeAt(0);
    s2Count[index2] -= 1;
    if (s1Count[index2] == s2Count[index2]) {
      matches += 1;
    } else if (s1Count[index2] - 1 == s2Count[index2]) {
      matches -= 1;
    }
    left += 1;
  }

  return matches == 26;
}

console.log(checkInclusion("abc", "baxyzabc"));

//

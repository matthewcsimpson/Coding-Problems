const firstUniqCharOne = (s: string): number => {
  const check = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (!check.has(s[i])) {
      check.set(s[i], 1);
    } else {
      check.set(s[i], 2);
    }
  }

  for (let j = 0; j < s.length; j++) {
    if (check.get(s[j]) === 1) {
      return j;
    }
  }

  return -1;
};

export default firstUniqCharOne;
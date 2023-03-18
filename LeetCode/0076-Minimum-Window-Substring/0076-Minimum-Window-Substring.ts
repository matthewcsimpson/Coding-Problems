function minWindow(s: string, t: string): string {
  let minLeft = 0,
    minRight = s.length;

  const tcount = {};
  let needed = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] in tcount) tcount[t[i]]++;
    else {
      tcount[t[i]] = 1;
      needed++;
    }
  }

  const scount = {};
  let matched = 0,
    left = 0;

  for (let right = 0; right < s.length; right++) {
    if (s[right] in scount) {
      scount[s[right]]++;
    } else {
      scount[s[right]] = 1;
    }
    if (s[right] in tcount && scount[s[right]] === tcount[s[right]]) {
      matched++;
    }

    while (matched === needed) {
      if (right - left + 1 < minRight - minLeft + 1) {
        minLeft = left;
        minRight = right;
      }

      if (s[left] in tcount && scount[s[left]] === tcount[s[left]]) {
        matched--;
      }

      scount[s[left]]--;
      if (scount[s[left]] === 0) {
        delete scount[s[left]];
      }
      left++;
    }
  }
  return minRight - minLeft + 1 > s.length
    ? ""
    : s.slice(minLeft, minRight + 1);
}

export default minWindow;


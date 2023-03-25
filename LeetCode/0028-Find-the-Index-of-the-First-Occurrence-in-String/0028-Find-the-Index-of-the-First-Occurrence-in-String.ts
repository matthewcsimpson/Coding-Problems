function strStr(haystack: string, needle: string): number {
  if (needle === haystack) {
    return 0;
  }

  for (let i = needle.length; i <= haystack.length; i++) {
    if (haystack.slice(i - needle.length, i) === needle) {
      return i - needle.length;
    }
  }
  return -1;
}

export default strStr;

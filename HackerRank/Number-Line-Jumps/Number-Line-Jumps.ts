function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  if (x1 > x2 && v1 >= v2) {
    return "NO";
  }
  if (x2 > x1 && v2 >= v1) {
    return "NO";
  }
  if (x1 === x2) {
    return "YES";
  }

  while (x1 <= x2) {
    if (x1 === x2) {
      return "YES";
    }
    x1 += v1;
    x2 += v2;
  }
  return "NO";
}

export default kangaroo;

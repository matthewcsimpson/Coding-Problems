export function fib(n: number): number {
  if (n < 2) {
    return n;
  }

  let fibs = [0, 1];

  for (let count = 2; count <= n; count++) {
    fibs[count] = fibs[count - 2] + fibs[count - 1];
  }

  return fibs[n];
}

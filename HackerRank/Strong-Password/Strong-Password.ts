function minimumNumber(n: number, password: string): number {
  let count = 0;
  if (password.search(/[A-Z]/) === -1) {
    count += 1;
  }
  if (password.search(/[a-z]/) === -1) {
    count += 1;
  }
  if (password.search(/[0-9]/) === -1) {
    count += 1;
  }
  if (password.search(/[!@#$%^&*()--+ ]/) === -1) {
    count += 1;
  }
  if (n + count < 6) {
    count += 6 - (n + count);
  }
  return count;
}

export default minimumNumber;

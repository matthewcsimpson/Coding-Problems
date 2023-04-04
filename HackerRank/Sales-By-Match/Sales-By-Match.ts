function sockMerchant(ar: number[]): number {
  if (ar.length < 2) return 0;

  let sockCheck = new Map();

  for (let i = 0; i < ar.length; i++) {
    if (sockCheck.get(ar[i])) {
      sockCheck.set(ar[i], sockCheck.get(ar[i]) + 1);
    } else {
      sockCheck.set(ar[i], 1);
    }
  }

  let output = 0;
  for (let colour of sockCheck) {
    output += Math.floor(colour[1] / 2);
  }

  return output;
}

export default sockMerchant;

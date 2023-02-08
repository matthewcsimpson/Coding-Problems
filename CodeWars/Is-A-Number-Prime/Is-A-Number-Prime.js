/**
 * @param {number} num 
 * @returns boolean
 */
function isPrime(num) {
  // 2 and 3 are primes so just return true
  if (num === 2 || num === 3) {
    return true;
  }
  // 1 is not a prime, so anything equal to or less than that are not prime.
  if (num <= 1 || num % 2 == 0 || num % 3 === 0) {
    return false;
  }
  // loop the remaining possible divisors, starting at 5 (no need for 4 since it is divisible by 2)
  // looping up to i*i (i^2) because anything that will divide into the sqrt will also divide into the
  // actual number
  // and iterating by 6 because the mathematical expression of a prime is
  // 6k+1 (where k is any whole number)
  for (let i = 5; i * i <= num; i += 6) {
    // check if the num % i or % (i+2) is equal to zero, and if it is, the number is not prime.
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

// Tests
console.log(isPrime(0)); // expect false
console.log(isPrime(1)); // expect false
console.log(isPrime(2)); // expect true
console.log(isPrime(73)); // expect true
console.log(isPrime(75)); // expect false
console.log(isPrime(-1)); // expect false

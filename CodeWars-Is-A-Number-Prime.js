// Define a function that takes an integer argument and returns a logical
// value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater
// than 1 that has no positive divisors other than 1 and itself.

// Requirements

// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be
// given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but
// still the most trivial solutions might time out. Numbers go up to 2^31
// ( or similar, depending on language ). Looping all the way up to n, or
// n/2, will be too slow.

// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

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

console.log(isPrime(0)); // expect false
console.log(isPrime(1)); // expect false
console.log(isPrime(2)); // expect true
console.log(isPrime(73)); // expect true
console.log(isPrime(75)); // expect false
console.log(isPrime(-1)); // expect false

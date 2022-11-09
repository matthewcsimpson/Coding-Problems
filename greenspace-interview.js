// write a fucntion that takes in an array of numbers
// and returns an array where every index is the product of all other indexes.
// eg: [1, 2, 3] => [6, 3, 2]

// function takes in an array of n numbers
// loop the array and return the product of all other numbers

// [1,2,3,4] => [24, 12, 8, 6]

/**
 * param {array}
 * return {number}
 */
const product = (array) => {
  let pnumber = 1;
  let returnArr = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        pnumber *= array[j];
      }
    }
    returnArr.push(pnumber);
    pnumber = 1;
  }

  // pnumber is 1.
  // zerocount = 0
  // loop the array and find total product
  // if array[i] !== null || !== 0
  // zerocont +=1
  // pnumber *= array[i]

  // loopTwo pnumber/array[i]
  // if array[i] !== null || !== 0
  // push pnumber
  // else push 0

  return returnArr;
};

console.log("return", product([1, 2, 3]));
console.log("return lots", product([1, 4, 3, 6, 3, 4, 3, 3]));
console.log("return w/neg", product([1, 4, 3, -2, 3, 4, 3, 3]));
console.log("return w/ null", product([1, 4, 3, 6, 3, null, 3, 3]));
console.log("return w/ 0", product([1, 4, 3, 6, 0, 4, 3, 3]));

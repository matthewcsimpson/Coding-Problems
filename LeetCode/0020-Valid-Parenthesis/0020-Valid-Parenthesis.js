/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // split the incoming string into an array
  let array = s.split("");
  // new array to hold the character we'll be checking
  let checkArray = [];

  // loop the array
  for (let i = 0; i < array.length; i++) {
    // if the current character is any opening bracket, add it to the checkArray.
    if (array[i] === "(" || array[i] === "{" || array[i] === "[") {
      checkArray.push(array[i]);
    }

    // if the last character in the checkArray is the matching opening bracket to ),
    // pop() that last character out of the checkArray.  else, push in the current
    // character into the check array
    if (array[i] === ")") {
      if (checkArray[checkArray.length - 1] === "(") {
        checkArray.pop();
      } else {
        checkArray.push(array[i]);
      }
    }

    // if the last character in the checkArray is the matching opening bracket to },
    // pop() that last character out of the checkArray.  else, push in the current
    // character into the check array
    if (array[i] === "}") {
      if (checkArray[checkArray.length - 1] === "{") {
        checkArray.pop();
      } else {
        checkArray.push(array[i]);
      }
    }

    // if the last character in the checkArray is the matching opening bracket to ],
    // pop() that last character out of the checkArray.  else, push in the current
    // character into the check array
    if (array[i] === "]") {
      if (checkArray[checkArray.length - 1] === "[") {
        checkArray.pop();
      } else {
        checkArray.push(array[i]);
      }
    }
  }

  // after all those checks, if the checkArray still has values in it,
  // then there is an invalid pair and return false.  otherwise return true.
  return checkArray.length > 0 ? false : true;
};

module.exports = isValid;


function lonelyInteger(a) {
  // new array to keep track of numbers
  let check = [];
  // loop through the incoming array
  for (let i = 0; i < a.length; i++) {
    // if the check array does not contain the current element,
    // add the current element to the check array
    if (!check.includes(a[i])) {
      check.push(a[i]);
      // if the check array does contain the current element,
      // remove that element from the check array
    } else if (check.includes(a[i])) {
      check.splice(check.indexOf(a[i]), 1);
    }
  }
  // return the first element of the check array, which should be the only element,
  // as all others would have been added and then removed again.
  return check[0];
}

module.exports = lonelyInteger;


/**
 * @param {Array} other 
 * @returns boolean
 */
Array.prototype.sameStructureAs = (other) => {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.
  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.

  if (!Array.isArray(other)) {
    return false;
  }
  if (this.length !== other.length) {
    return false;
  }

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && !this[i].sameStructureAs(other[i])) {
      return false;
    } else if (!Array.isArray(this[i]) && Array.isArray(other[i])) {
      return false;
    }
  }
  return true;
};

// Tests
console.log([1, 1, 1].sameStructureAs([2, 2, 2])); // true

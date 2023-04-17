## 2618. Check if Object Instance of Class

Write a function that checks if a given object is an instance of a given class or superclass.

There are no constraints on the data types that can be passed to the function.

### Example 1:

- Input: `func = () => checkIfInstance(new Date(), Date)`
- Output: `true`
- Explanation: _The object returned by the Date constructor is, by definition, an instance of Date._

### Example 2:

- Input: `func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstance(new Dog(), Animal); }`
- Output: `true`
- Explanation:
  - _`class Animal {};`_
  - _`class Dog extends Animal {};`_
  - _`checkIfInstance(new Dog(), Animal); // true`_
- _`Dog` is a subclass of `Animal`. Therefore, a `Dog` object is an instance of both `Dog` and `Animal`._

### Example 3:

- Input: `func = () => checkIfInstance(Date, Date)`
- Output: `false`
- Explanation: _A date constructor cannot logically be an instance of itself._

### Example 4:

- Input: _func = () => checkIfInstance(5, Number)_
- Output: `true`
- Explanation: _`5` is a Number. Note that the "instanceof" keyword would return false._

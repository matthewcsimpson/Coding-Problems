const findNextSquare = require("./Find-Next-Perfect-Square");

test("Find-Next-Perfect-Square", ()=>{
expect(findNextSquare(15241383936)).toBe(15241630849);
expect(findNextSquare(155)).toBe(-1);
expect(findNextSquare(319225)).toBe(320356);
expect(findNextSquare(625)).toBe(676);
expect(findNextSquare(121)).toBe(144);

})



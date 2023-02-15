const maxArea = require('./0011-Container-With-Most-Water')

test("0011-Container-With-Most-Water", ()=>{
    expect(maxArea([1,1])).toBe(1);
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).not.toBe(48);

})

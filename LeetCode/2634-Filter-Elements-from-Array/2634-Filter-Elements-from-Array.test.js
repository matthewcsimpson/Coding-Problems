import filter from "./2634-Filter-Elements-from-Array";

test("2634-Filter-Elements-from-Array", () => {
  expect(
    filter([0, 10, 20, 30], (n) => {
      return n > 10;
    })
  ).toStrictEqual([20, 30]);
  expect(
    filter([1, 2, 3], (n, i) => {
      return i === 0;
    })
  ).toStrictEqual([1]);
  expect(
    filter([-2, -1, 0, 1, 2], (n) => {
      return n + 1;
    })
  ).toStrictEqual([-2, 0, 1, 2]);
});

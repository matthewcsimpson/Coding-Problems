import { test, expect } from "@jest/globals";
import checkIfInstanceOf from "./2618-Check-if-Object-Instance-of-Class";

test("2618-Check-if-Object-Instance-of-Class", () => {
  expect(checkIfInstanceOf(5, Number)).toBe(true);
  // ---
  class Animal {}
  class Dog extends Animal {}
  expect(checkIfInstanceOf(new Dog(), Animal)).toBe(true);
  // ---
  expect(checkIfInstanceOf(Date, Date)).toBe(false);
  expect(checkIfInstanceOf(new Date(), Date)).toBe(true);


});

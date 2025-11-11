import { expect, test } from "@jest/globals";
import reverseBitsString from "./0190-Reverse-Bits-string";

test("0190-Reverse-Bits-1", () => {
  expect(reverseBitsString(0b00000010100101000001111010011100)).toBe(
    0b00111001011110000010100101000000
  );
  expect(reverseBitsString(0b11111111111111111111111111111101)).toBe(
    0b10111111111111111111111111111111
  );
  expect(reverseBitsString(43261596)).toBe(964176192);
  expect(reverseBitsString(2147483644)).toBe(1073741822);
});

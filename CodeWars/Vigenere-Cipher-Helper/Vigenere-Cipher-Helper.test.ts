import { test, expect } from "@jest/globals";
import VigenèreCipher from "./Vigenere-Cipher-Helper";

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var key = "password";
var c = new VigenèreCipher(key, alphabet);

test("Vigenere-Cipher-Helper", () => {
  expect(c.encode("CODEWARS")).toBe("CODEWARS");
  expect(c.encode("codewars")).toBe("rovwsoiv");
  expect(c.decode("laxxhsj")).toBe("waffles"); // returns 'waffles')
});

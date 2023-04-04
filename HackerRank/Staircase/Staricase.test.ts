import { test, expect } from "@jest/globals";
import staircase from "./Staricase";

// Test Data
let ten = [
  "         #",
  "        ##",
  "       ###",
  "      ####",
  "     #####",
  "    ######",
  "   #######",
  "  ########",
  " #########",
  "##########",
];

let twelve = [
  "           #",
  "          ##",
  "         ###",
  "        ####",
  "       #####",
  "      ######",
  "     #######",
  "    ########",
  "   #########",
  "  ##########",
  " ###########",
  "############",
];

let five = ["    #", "   ##", "  ###", " ####", "#####"];

test("Staircase", () => {
  expect(staircase(10)).toStrictEqual(ten);
  expect(staircase(12)).toStrictEqual(twelve);
  expect(staircase(5)).toStrictEqual(five);
});

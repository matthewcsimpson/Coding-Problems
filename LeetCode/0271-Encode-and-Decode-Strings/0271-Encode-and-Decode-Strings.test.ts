import { expect, test } from "@jest/globals";
import { encode, decode } from "./0271-Encode-and-Decode-Strings";

test("0271-Encode-and-Decode-Strings - encode", () => {
    expect(encode(["one", "two", "three"])).toStrictEqual("oneJOINtwoJOINthree")
});

test("0271-Encode-and-Decode-Strings - decode", () => {
    expect(decode("oneJOINtwoJOINthree")).toStrictEqual(["one", "two", "three"])
});

test("0271-Encode-and-Decode-Strings - decode/encode", () => {
    expect(decode(encode(["one", "two", "three"]))).toStrictEqual(["one", "two", "three"])
});

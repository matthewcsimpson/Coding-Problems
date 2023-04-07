import { test, expect } from "@jest/globals";
import alternate from "./Two-Characers";

test("Two Characters", () => {
  expect(alternate("beabeefeab")).toBe(5);
  expect(alternate("a")).toBe(0);
  expect(
    alternate(
      "uyetuppelecblwipdsqabzsvyfaezeqhpnalahnpkdbhzjglcuqfjnzpmbwprelbayyzovkhacgrglrdpmvaexkgertilnfooeazvulykxypsxicofnbyivkthovpjzhpohdhuebazlukfhaavfsssuupbyjqdxwwqlicbjirirspqhxomjdzswtsogugmbnslcalcfaxqmionsxdgpkotffycphsewyqvhqcwlufekxwoiudxjixchfqlavjwhaennkmfsdhigyeifnoskjbzgzggsmshdhzagpznkbahixqgrdnmlzogprctjggsujmqzqknvcuvdinesbwpirfasnvfjqceyrkknyvdritcfyowsgfrevzon"
    )
  ).toBe(0);
  expect(alternate("nkrtilugufndzwdoabujujdeglaihiutnfjqjoaohr")).toBe(5);
});

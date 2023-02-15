const rgb2 = require("./RGB-to-Hex-2");

test("RGB-to-Hex-2", () => {
  expect(rgb2(255, 255, 255)).toBe("FFFFFF");
  expect(rgb2(255, 255, 300)).toBe("FFFFFF");
  expect(rgb2(0, 0, 0)).toBe("000000");
  expect(rgb2(148, 0, 211)).toBe("9400D3");
});

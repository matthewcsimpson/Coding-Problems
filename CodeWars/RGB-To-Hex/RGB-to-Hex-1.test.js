const rgb = require("./RGB-to-Hex-1");

test("RGB-to-Hex-1", () => {
  expect(rgb(255, 255, 255)).toBe("FFFFFF");
  expect(rgb(255, 255, 300)).toBe("FFFFFF");
  expect(rgb(0, 0, 0)).toBe("000000");
  expect(rgb(148, 0, 211)).toBe("9400D3");
});

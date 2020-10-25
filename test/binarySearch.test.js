const binarySearch = require("../algorithm/binarySearch");

describe("二分查找", () => {
  it("`[2, 4, 5, 12, 64, 614, 1448, 144]`中查找`64`返回`4`", () => {
    expect(binarySearch([2, 4, 5, 12, 64, 614, 1448, 4555], 64)).toBe(4);
  });
  it("`[2, 4, 5, 12, 64, 64, 144, 144]`中查找`1`返回`-1`", () => {
    expect(binarySearch([2, 4, 5, 12, 64, 614, 1448, 4555], 1)).toBe(-1);
  });
});

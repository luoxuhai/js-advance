const lis = require("../algorithm/lis");

describe("最长递增子序列", () => {
  it("空数组返回`0`", () => {
    expect(lis([])).toBe(0);
  });
  it("`[0, 3, 4, 17, 2, 8, 6, 10]`返回`5`", () => {
    expect(lis([0, 3, 4, 17, 2, 8, 6, 10])).toBe(5);
  });
});

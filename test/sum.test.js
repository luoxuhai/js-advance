const sum = require("../algorithm/sum");

describe("两个数不使用四则运算得出和", () => {
  it("`0 + 5 = 5`", () => {
    expect(sum(0, 5)).toBe(0 + 5);
  });
  it("`115 + 55 = 170`", () => {
    expect(sum(115, 55)).toBe(115 + 55);
  });
});

const { fibonacci, fibonacciDP } = require("../fibonacci");

describe("斐波那契数列", () => {
  it("返回斐波那契数列第`14`位：`377`", () => {
    expect(fibonacci(14)).toBe(377);
  });
  it("返回斐波那契数列动态规划实现第`14`位：`377`", () => {
    expect(fibonacciDP(14)).toBe(377);
  });
});

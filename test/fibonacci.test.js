const fibonacci = require("../fibonacci");

describe("斐波那契数列", () => {
  it("返回斐波那契数列第`14`位：`377`", () => {
    expect(fibonacci(14)).toBe(377);
  });
});

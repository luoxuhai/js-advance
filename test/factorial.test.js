const factorial = require("../factorial");

describe("阶乘", () => {
  it("`0`的阶乘：`1`", () => {
    expect(factorial(0)).toBe(1);
  });
  it("`5`的阶乘：`120`", () => {
    expect(factorial(5)).toBe(120);
  });
});

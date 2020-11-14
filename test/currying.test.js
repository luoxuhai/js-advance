const { sum, curry } = require("../currying");

describe("柯里化Currying", () => {
  it("求和", () => {
    expect(sum(1, 2, 3)(4)()).toBe(10);
    expect(sum(1, 2, 3)(4)(4)()).toBe(14);
  });
  it("高级柯里化", () => {
    function sum(a, b, c) {
      return a + b + c;
    }
    expect(curry(sum)(1, 2, 3)).toBe(6);
    expect(curry(sum)(1, 2)(3)).toBe(6);
    expect(curry(sum)(1)(2)(3)).toBe(6);
  });
});

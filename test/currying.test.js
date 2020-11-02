const currying = require("../currying");

describe("柯里化Currying", () => {
  it("求和", () => {
    expect(currying(1, 2, 3)(4)()).toBe(10);
    expect(currying(1, 2, 3)(4)(4)()).toBe(14);
  });
});

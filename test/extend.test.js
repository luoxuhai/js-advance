const Sub = require("../extend");

describe("ES5 继承", () => {
  it("返回 `Super`", () => {
    expect(new Sub().getStr()).toBe("Super");
  });
});
